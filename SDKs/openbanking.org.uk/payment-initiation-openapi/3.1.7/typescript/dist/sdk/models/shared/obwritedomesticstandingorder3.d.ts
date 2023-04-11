import { SpeakeasyBase } from "../../../internal/utils";
import { OBRisk1 } from "./obrisk1";
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
 */
export declare class OBWriteDomesticStandingOrder3DataInitiationCreditorAccount extends SpeakeasyBase {
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
 * Provides the details to identify the debtor account.
 */
export declare class OBWriteDomesticStandingOrder3DataInitiationDebtorAccount extends SpeakeasyBase {
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
 * The amount of the final Standing Order
 */
export declare class OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount extends SpeakeasyBase {
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
 * The amount of the first Standing Order
 */
export declare class OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount extends SpeakeasyBase {
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
 * The amount of the recurring Standing Order
 */
export declare class OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
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
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
 */
export declare class OBWriteDomesticStandingOrder3DataInitiation extends SpeakeasyBase {
    /**
     * Identification assigned by an institution to identify an account. This identification is known by the account owner.
     */
    creditorAccount: OBWriteDomesticStandingOrder3DataInitiationCreditorAccount;
    /**
     * Provides the details to identify the debtor account.
     */
    debtorAccount?: OBWriteDomesticStandingOrder3DataInitiationDebtorAccount;
    /**
     * The amount of the final Standing Order
     */
    finalPaymentAmount?: OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;
    /**
     * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    finalPaymentDateTime?: Date;
    /**
     * The amount of the first Standing Order
     */
    firstPaymentAmount: OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;
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
     * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
     */
    numberOfPayments?: string;
    /**
     * The amount of the recurring Standing Order
     */
    recurringPaymentAmount?: OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;
    /**
     * The date on which the first recurring payment for a Standing Order schedule will be made.
     *
     * @remarks
     * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    recurringPaymentDateTime?: Date;
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
export declare class OBWriteDomesticStandingOrder3Data extends SpeakeasyBase {
    /**
     * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
     */
    consentId: string;
    /**
     * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
     */
    initiation: OBWriteDomesticStandingOrder3DataInitiation;
}
export declare class OBWriteDomesticStandingOrder3 extends SpeakeasyBase {
    data: OBWriteDomesticStandingOrder3Data;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
     */
    risk: OBRisk1;
}
