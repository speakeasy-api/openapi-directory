import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { OBCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { OBChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { OBSCASupportData1 } from "./obscasupportdata1";
/**
 * Type of authorisation flow requested.
 */
export declare enum OBWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
 */
export declare class OBWriteFileConsentResponse4DataAuthorisation extends SpeakeasyBase {
    /**
     * Type of authorisation flow requested.
     */
    authorisationType: OBWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum;
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
export declare class OBWriteFileConsentResponse4DataCharges extends SpeakeasyBase {
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
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
 */
export declare class OBWriteFileConsentResponse4DataInitiationDebtorAccount extends SpeakeasyBase {
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
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
 */
export declare class OBWriteFileConsentResponse4DataInitiationRemittanceInformation extends SpeakeasyBase {
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
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
 */
export declare class OBWriteFileConsentResponse4DataInitiation extends SpeakeasyBase {
    /**
     * Total of all individual amounts included in the group, irrespective of currencies.
     */
    controlSum?: number;
    /**
     * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
     */
    debtorAccount?: OBWriteFileConsentResponse4DataInitiationDebtorAccount;
    /**
     * A base64 encoding of a SHA256 hash of the file to be uploaded.
     */
    fileHash: string;
    /**
     * Reference for the file.
     */
    fileReference?: string;
    /**
     * Specifies the payment file type.
     */
    fileType: string;
    /**
     * User community specific instrument.
     *
     * @remarks
     * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
     */
    localInstrument?: string;
    /**
     * Number of individual transactions contained in the payment information group.
     */
    numberOfTransactions?: string;
    /**
     * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
     */
    remittanceInformation?: OBWriteFileConsentResponse4DataInitiationRemittanceInformation;
    /**
     * Date at which the initiating party requests the clearing agent to process the payment.
     *
     * @remarks
     * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    requestedExecutionDateTime?: Date;
    /**
     * Additional information that can not be captured in the structured fields and/or any other specific block.
     */
    supplementaryData?: Record<string, any>;
}
/**
 * Specifies the status of consent resource in code form.
 */
export declare enum OBWriteFileConsentResponse4DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    AwaitingUpload = "AwaitingUpload",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class OBWriteFileConsentResponse4Data extends SpeakeasyBase {
    /**
     * The authorisation type request from the TPP.
     */
    authorisation?: OBWriteFileConsentResponse4DataAuthorisation;
    charges?: OBWriteFileConsentResponse4DataCharges[];
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
     * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
     */
    initiation: OBWriteFileConsentResponse4DataInitiation;
    /**
     * Supporting Data provided by TPP, when requesting SCA Exemption.
     */
    scaSupportData?: OBSCASupportData1;
    /**
     * Specifies the status of consent resource in code form.
     */
    status: OBWriteFileConsentResponse4DataStatusEnum;
    /**
     * Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    statusUpdateDateTime: Date;
}
/**
 * File Payment Consents Created
 */
export declare class OBWriteFileConsentResponse4 extends SpeakeasyBase {
    data: OBWriteFileConsentResponse4Data;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
