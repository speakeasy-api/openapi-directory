import { SpeakeasyBase } from "../../../internal/utils";
import { OBChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { OBPostalAddress6 } from "./obpostaladdress6";
import { OBRisk1 } from "./obrisk1";
import { OBSCASupportData1 } from "./obscasupportdata1";
/**
 * Type of authorisation flow requested.
 */
export declare enum OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
 */
export declare class OBWriteInternationalStandingOrderConsent6DataAuthorisation extends SpeakeasyBase {
    /**
     * Type of authorisation flow requested.
     */
    authorisationType: OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum;
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
 * Party to which an amount of money is due.
 */
export declare class OBWriteInternationalStandingOrderConsent6DataInitiationCreditor extends SpeakeasyBase {
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
 * Provides the details to identify the beneficiary account.
 */
export declare class OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount extends SpeakeasyBase {
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
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 *
 * @remarks
 * This is the servicer of the beneficiary account.
 */
export declare class OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent extends SpeakeasyBase {
    /**
     * Unique and unambiguous identification of the servicing institution.
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
 * Provides the details to identify the debtor account.
 */
export declare class OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount extends SpeakeasyBase {
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
export declare class OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount extends SpeakeasyBase {
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
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
 */
export declare class OBWriteInternationalStandingOrderConsent6DataInitiation extends SpeakeasyBase {
    /**
     * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
     */
    chargeBearer?: OBChargeBearerType1CodeEnum;
    /**
     * Party to which an amount of money is due.
     */
    creditor?: OBWriteInternationalStandingOrderConsent6DataInitiationCreditor;
    /**
     * Provides the details to identify the beneficiary account.
     */
    creditorAccount: OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;
    /**
     * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
     *
     * @remarks
     * This is the servicer of the beneficiary account.
     */
    creditorAgent?: OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;
    /**
     * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
     */
    currencyOfTransfer: string;
    /**
     * Provides the details to identify the debtor account.
     */
    debtorAccount?: OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;
    /**
     * Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).
     */
    destinationCountryCode?: string;
    /**
     * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
     */
    extendedPurpose?: string;
    /**
     * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    finalPaymentDateTime?: Date;
    /**
     * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    firstPaymentDateTime: Date;
    /**
     * Individual Definitions:
     *
     * @remarks
     * EvryDay - Every day
     * EvryWorkgDay - Every working day
     * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
     * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
     * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
     * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
     * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
     * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
     * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
     * Individual Patterns:
     * EvryDay (ScheduleCode)
     * EvryWorkgDay (ScheduleCode)
     * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
     * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
     * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
     * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
     * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
     * EvryDay
     * EvryWorkgDay
     * IntrvlWkDay:0[1-9]:0[1-7]
     * WkInMnthDay:0[1-5]:0[1-7]
     * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
     * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
     * Full Regular Expression:
     * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
     */
    frequency: string;
    /**
     * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
     *
     * @remarks
     * Usage: This amount has to be transported unchanged through the transaction chain.
     */
    instructedAmount: OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;
    /**
     * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
     */
    numberOfPayments?: string;
    /**
     * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
     *
     * @remarks
     * The list of valid codes is an external code list published separately.
     * External code sets can be downloaded from www.iso20022.org.
     */
    purpose?: string;
    /**
     * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
     *
     * @remarks
     * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
     * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
     */
    reference?: string;
    /**
     * Additional information that can not be captured in the structured fields and/or any other specific block.
     */
    supplementaryData?: Record<string, any>;
}
/**
 * Specifies the Open Banking service request types.
 */
export declare enum OBWriteInternationalStandingOrderConsent6DataPermissionEnum {
    Create = "Create"
}
/**
 * Specifies to share the refund account details with PISP
 */
export declare enum OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare class OBWriteInternationalStandingOrderConsent6Data extends SpeakeasyBase {
    /**
     * The authorisation type request from the TPP.
     */
    authorisation?: OBWriteInternationalStandingOrderConsent6DataAuthorisation;
    /**
     * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
     */
    initiation: OBWriteInternationalStandingOrderConsent6DataInitiation;
    /**
     * Specifies the Open Banking service request types.
     */
    permission: OBWriteInternationalStandingOrderConsent6DataPermissionEnum;
    /**
     * Specifies to share the refund account details with PISP
     */
    readRefundAccount?: OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum;
    /**
     * Supporting Data provided by TPP, when requesting SCA Exemption.
     */
    scaSupportData?: OBSCASupportData1;
}
export declare class OBWriteInternationalStandingOrderConsent6 extends SpeakeasyBase {
    data: OBWriteInternationalStandingOrderConsent6Data;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
     */
    risk: OBRisk1;
}
