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
export declare enum OBWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
 */
export declare class OBWriteInternationalConsentResponse6DataAuthorisation extends SpeakeasyBase {
    /**
     * Type of authorisation flow requested.
     */
    authorisationType: OBWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum;
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
export declare class OBWriteInternationalConsentResponse6DataCharges extends SpeakeasyBase {
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
 * Specifies the type used to complete the currency exchange.
 */
export declare enum OBWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
 */
export declare class OBWriteInternationalConsentResponse6DataExchangeRateInformation extends SpeakeasyBase {
    /**
     * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
     */
    contractIdentification?: string;
    /**
     * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
     */
    exchangeRate: number;
    /**
     * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    expirationDateTime?: Date;
    /**
     * Specifies the type used to complete the currency exchange.
     */
    rateType: OBWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum;
    /**
     * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
     */
    unitCurrency: string;
}
/**
 * Party to which an amount of money is due.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationCreditor extends SpeakeasyBase {
    /**
     * Name by which a party is known and which is usually used to identify that party.
     */
    name?: string;
    /**
     * Information that locates and identifies a specific address, as defined by postal services.
     */
    postalAddress?: OBPostalAddress6;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
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
 * Financial institution servicing an account for the creditor.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationCreditorAgent extends SpeakeasyBase {
    /**
     * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
     */
    identification?: string;
    /**
     * Name by which an agent is known and which is usually used to identify that agent.
     */
    name?: string;
    /**
     * Information that locates and identifies a specific address, as defined by postal services.
     */
    postalAddress?: OBPostalAddress6;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     */
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
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
 * Specifies the type used to complete the currency exchange.
 */
export declare enum OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Provides details on the currency exchange rate and contract.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformation extends SpeakeasyBase {
    /**
     * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
     */
    contractIdentification?: string;
    /**
     * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
     */
    exchangeRate?: number;
    /**
     * Specifies the type used to complete the currency exchange.
     */
    rateType: OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum;
    /**
     * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
     */
    unitCurrency: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 *
 * @remarks
 * Usage: This amount has to be transported unchanged through the transaction chain.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationInstructedAmount extends SpeakeasyBase {
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
 * Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.
 */
export declare enum OBWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiationRemittanceInformation extends SpeakeasyBase {
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
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
 */
export declare class OBWriteInternationalConsentResponse6DataInitiation extends SpeakeasyBase {
    /**
     * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
     */
    chargeBearer?: OBChargeBearerType1CodeEnum;
    /**
     * Party to which an amount of money is due.
     */
    creditor?: OBWriteInternationalConsentResponse6DataInitiationCreditor;
    /**
     * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
     */
    creditorAccount: OBWriteInternationalConsentResponse6DataInitiationCreditorAccount;
    /**
     * Financial institution servicing an account for the creditor.
     */
    creditorAgent?: OBWriteInternationalConsentResponse6DataInitiationCreditorAgent;
    /**
     * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
     */
    currencyOfTransfer: string;
    /**
     * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
     */
    debtorAccount?: OBWriteInternationalConsentResponse6DataInitiationDebtorAccount;
    /**
     * Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).
     */
    destinationCountryCode?: string;
    /**
     * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
     *
     * @remarks
     * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
     * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
     */
    endToEndIdentification: string;
    /**
     * Provides details on the currency exchange rate and contract.
     */
    exchangeRateInformation?: OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformation;
    /**
     * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
     */
    extendedPurpose?: string;
    /**
     * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
     *
     * @remarks
     * Usage: This amount has to be transported unchanged through the transaction chain.
     */
    instructedAmount: OBWriteInternationalConsentResponse6DataInitiationInstructedAmount;
    /**
     * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
     *
     * @remarks
     * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
     */
    instructionIdentification: string;
    /**
     * Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.
     */
    instructionPriority?: OBWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum;
    /**
     * User community specific instrument.
     *
     * @remarks
     * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
     */
    localInstrument?: string;
    /**
     * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
     *
     * @remarks
     * The list of valid codes is an external code list published separately.
     * External code sets can be downloaded from www.iso20022.org.
     */
    purpose?: string;
    /**
     * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
     */
    remittanceInformation?: OBWriteInternationalConsentResponse6DataInitiationRemittanceInformation;
    /**
     * Additional information that can not be captured in the structured fields and/or any other specific block.
     */
    supplementaryData?: Record<string, any>;
}
/**
 * Specifies to share the refund account details with PISP
 */
export declare enum OBWriteInternationalConsentResponse6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
/**
 * Specifies the status of consent resource in code form.
 */
export declare enum OBWriteInternationalConsentResponse6DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class OBWriteInternationalConsentResponse6Data extends SpeakeasyBase {
    /**
     * The authorisation type request from the TPP.
     */
    authorisation?: OBWriteInternationalConsentResponse6DataAuthorisation;
    charges?: OBWriteInternationalConsentResponse6DataCharges[];
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
     * Further detailed information on the exchange rate that has been used in the payment transaction.
     */
    exchangeRateInformation?: OBWriteInternationalConsentResponse6DataExchangeRateInformation;
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
     * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
     */
    initiation: OBWriteInternationalConsentResponse6DataInitiation;
    /**
     * Specifies to share the refund account details with PISP
     */
    readRefundAccount?: OBWriteInternationalConsentResponse6DataReadRefundAccountEnum;
    /**
     * Supporting Data provided by TPP, when requesting SCA Exemption.
     */
    scaSupportData?: OBSCASupportData1;
    /**
     * Specifies the status of consent resource in code form.
     */
    status: OBWriteInternationalConsentResponse6DataStatusEnum;
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
 * International Payment Consents Created
 */
export declare class OBWriteInternationalConsentResponse6 extends SpeakeasyBase {
    data: OBWriteInternationalConsentResponse6Data;
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
