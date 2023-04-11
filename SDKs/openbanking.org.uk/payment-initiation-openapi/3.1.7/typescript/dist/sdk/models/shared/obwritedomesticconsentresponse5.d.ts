import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { OBChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { OBPostalAddress6 } from "./obpostaladdress6";
import { OBRisk1 } from "./obrisk1";
import { OBSCASupportData1 } from "./obscasupportdata1";
/**
 * Type of authorisation flow requested.
 */
export declare enum OBWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
 */
export declare class OBWriteDomesticConsentResponse5DataAuthorisation extends SpeakeasyBase {
    /**
     * Type of authorisation flow requested.
     */
    authorisationType: OBWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum;
    /**
     * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    completionDateTime?: Date;
}
/**
 * Set of elements used to provide details of a charge for the payment initiation.
 */
export declare class OBWriteDomesticConsentResponse5DataCharges extends SpeakeasyBase {
    /**
     * Amount of money associated with the charge type.
     */
    amount: OBActiveOrHistoricCurrencyAndAmount;
    /**
     * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
     */
    chargeBearer: OBChargeBearerType1CodeEnum;
    /**
     * Charge type, in a coded form.
     */
    type: string;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
 */
export declare class OBWriteDomesticConsentResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
    /**
     * Identification assigned by an institution to identify an account. This identification is known by the account owner.
     */
    identification: string;
    /**
     * The account name is the name or names of the account owner(s) represented at an account level.
     *
     * @remarks
     * Note, the account name is not the product name or the nickname of the account.
     * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
     */
    name: string;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     */
    schemeName: string;
    /**
     * This is secondary identification of the account, as assigned by the account servicing institution.
     *
     * @remarks
     * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
     */
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
 */
export declare class OBWriteDomesticConsentResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
    /**
     * Identification assigned by an institution to identify an account. This identification is known by the account owner.
     */
    identification: string;
    /**
     * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
     *
     * @remarks
     * Note, the account name is not the product name or the nickname of the account.
     */
    name?: string;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     */
    schemeName: string;
    /**
     * This is secondary identification of the account, as assigned by the account servicing institution.
     *
     * @remarks
     * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
     */
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 *
 * @remarks
 * Usage: This amount has to be transported unchanged through the transaction chain.
 */
export declare class OBWriteDomesticConsentResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
    /**
     * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
     */
    amount: string;
    /**
     * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
     */
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
 */
export declare class OBWriteDomesticConsentResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
    /**
     * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
     *
     * @remarks
     * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
     * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
     * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
     */
    reference?: string;
    /**
     * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
     */
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
 */
export declare class OBWriteDomesticConsentResponse5DataInitiation extends SpeakeasyBase {
    /**
     * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
     */
    creditorAccount: OBWriteDomesticConsentResponse5DataInitiationCreditorAccount;
    /**
     * Information that locates and identifies a specific address, as defined by postal services.
     */
    creditorPostalAddress?: OBPostalAddress6;
    /**
     * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
     */
    debtorAccount?: OBWriteDomesticConsentResponse5DataInitiationDebtorAccount;
    /**
     * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
     *
     * @remarks
     * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
     * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
     */
    endToEndIdentification: string;
    /**
     * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
     *
     * @remarks
     * Usage: This amount has to be transported unchanged through the transaction chain.
     */
    instructedAmount: OBWriteDomesticConsentResponse5DataInitiationInstructedAmount;
    /**
     * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
     *
     * @remarks
     * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
     */
    instructionIdentification: string;
    /**
     * User community specific instrument.
     *
     * @remarks
     * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
     */
    localInstrument?: string;
    /**
     * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
     */
    remittanceInformation?: OBWriteDomesticConsentResponse5DataInitiationRemittanceInformation;
    /**
     * Additional information that can not be captured in the structured fields and/or any other specific block.
     */
    supplementaryData?: Record<string, any>;
}
/**
 * Specifies to share the refund account details with PISP
 */
export declare enum OBWriteDomesticConsentResponse5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
/**
 * Specifies the status of consent resource in code form.
 */
export declare enum OBWriteDomesticConsentResponse5DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class OBWriteDomesticConsentResponse5Data extends SpeakeasyBase {
    /**
     * The authorisation type request from the TPP.
     */
    authorisation?: OBWriteDomesticConsentResponse5DataAuthorisation;
    charges?: OBWriteDomesticConsentResponse5DataCharges[];
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    consentId: string;
    /**
     * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    creationDateTime: Date;
    /**
     * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    cutOffDateTime?: Date;
    /**
     * ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.
     */
    debtor?: OBCashAccountDebtor4;
    /**
     * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    expectedExecutionDateTime?: Date;
    /**
     * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    expectedSettlementDateTime?: Date;
    /**
     * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
     */
    initiation: OBWriteDomesticConsentResponse5DataInitiation;
    /**
     * Specifies to share the refund account details with PISP
     */
    readRefundAccount?: OBWriteDomesticConsentResponse5DataReadRefundAccountEnum;
    /**
     * Supporting Data provided by TPP, when requesting SCA Exemption.
     */
    scaSupportData?: OBSCASupportData1;
    /**
     * Specifies the status of consent resource in code form.
     */
    status: OBWriteDomesticConsentResponse5DataStatusEnum;
    /**
     * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    statusUpdateDateTime: Date;
}
/**
 * Domestic Payment Consents Created
 */
export declare class OBWriteDomesticConsentResponse5 extends SpeakeasyBase {
    data: OBWriteDomesticConsentResponse5Data;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
     */
    risk: OBRisk1;
}
