// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// OBWriteInternationalStandingOrder4DataInitiationCreditor - Party to which an amount of money is due.
type OBWriteInternationalStandingOrder4DataInitiationCreditor struct {
	// Name by which a party is known and which is usually used to identify that party.
	Name *string `json:"Name,omitempty"`
	// Information that locates and identifies a specific address, as defined by postal services.
	PostalAddress *OBPostalAddress6 `json:"PostalAddress,omitempty"`
}

// OBWriteInternationalStandingOrder4DataInitiationCreditorAccount - Provides the details to identify the beneficiary account.
type OBWriteInternationalStandingOrder4DataInitiationCreditorAccount struct {
	// Identification assigned by an institution to identify an account. This identification is known by the account owner.
	Identification string `json:"Identification"`
	// The account name is the name or names of the account owner(s) represented at an account level.
	// Note, the account name is not the product name or the nickname of the account.
	// OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
	Name string `json:"Name"`
	// Name of the identification scheme, in a coded form as published in an external list.
	SchemeName string `json:"SchemeName"`
	// This is secondary identification of the account, as assigned by the account servicing institution.
	// This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// OBWriteInternationalStandingOrder4DataInitiationCreditorAgent - Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
// This is the servicer of the beneficiary account.
type OBWriteInternationalStandingOrder4DataInitiationCreditorAgent struct {
	// Unique and unambiguous identification of the servicing institution.
	Identification *string `json:"Identification,omitempty"`
	// Name by which an agent is known and which is usually used to identify that agent.
	Name *string `json:"Name,omitempty"`
	// Information that locates and identifies a specific address, as defined by postal services.
	PostalAddress *OBPostalAddress6 `json:"PostalAddress,omitempty"`
	// Name of the identification scheme, in a coded form as published in an external list.
	SchemeName *string `json:"SchemeName,omitempty"`
}

// OBWriteInternationalStandingOrder4DataInitiationDebtorAccount - Provides the details to identify the debtor account.
type OBWriteInternationalStandingOrder4DataInitiationDebtorAccount struct {
	// Identification assigned by an institution to identify an account. This identification is known by the account owner.
	Identification string `json:"Identification"`
	// The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
	// Note, the account name is not the product name or the nickname of the account.
	Name *string `json:"Name,omitempty"`
	// Name of the identification scheme, in a coded form as published in an external list.
	SchemeName string `json:"SchemeName"`
	// This is secondary identification of the account, as assigned by the account servicing institution.
	// This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// OBWriteInternationalStandingOrder4DataInitiationInstructedAmount - Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type OBWriteInternationalStandingOrder4DataInitiationInstructedAmount struct {
	// A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
	Amount string `json:"Amount"`
	// A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
	Currency string `json:"Currency"`
}

// OBWriteInternationalStandingOrder4DataInitiation - The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
type OBWriteInternationalStandingOrder4DataInitiation struct {
	// Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
	ChargeBearer *OBChargeBearerType1CodeEnum `json:"ChargeBearer,omitempty"`
	// Party to which an amount of money is due.
	Creditor *OBWriteInternationalStandingOrder4DataInitiationCreditor `json:"Creditor,omitempty"`
	// Provides the details to identify the beneficiary account.
	CreditorAccount OBWriteInternationalStandingOrder4DataInitiationCreditorAccount `json:"CreditorAccount"`
	// Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
	// This is the servicer of the beneficiary account.
	CreditorAgent *OBWriteInternationalStandingOrder4DataInitiationCreditorAgent `json:"CreditorAgent,omitempty"`
	// Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
	CurrencyOfTransfer string `json:"CurrencyOfTransfer"`
	// Provides the details to identify the debtor account.
	DebtorAccount *OBWriteInternationalStandingOrder4DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
	// Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).
	DestinationCountryCode *string `json:"DestinationCountryCode,omitempty"`
	// Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
	ExtendedPurpose *string `json:"ExtendedPurpose,omitempty"`
	// The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
	// All date-time fields in responses must include the timezone. An example is below:
	// 2017-04-05T10:43:07+00:00
	FinalPaymentDateTime *time.Time `json:"FinalPaymentDateTime,omitempty"`
	// The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
	// All date-time fields in responses must include the timezone. An example is below:
	// 2017-04-05T10:43:07+00:00
	FirstPaymentDateTime time.Time `json:"FirstPaymentDateTime"`
	// Individual Definitions:
	// EvryDay - Every day
	// EvryWorkgDay - Every working day
	// IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
	// WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
	// IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
	// QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
	// ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
	// SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
	// RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
	// Individual Patterns:
	// EvryDay (ScheduleCode)
	// EvryWorkgDay (ScheduleCode)
	// IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
	// WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
	// IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
	// QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
	// The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
	// EvryDay
	// EvryWorkgDay
	// IntrvlWkDay:0[1-9]:0[1-7]
	// WkInMnthDay:0[1-5]:0[1-7]
	// IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
	// QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
	// Full Regular Expression:
	// ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
	Frequency string `json:"Frequency"`
	// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
	// Usage: This amount has to be transported unchanged through the transaction chain.
	InstructedAmount OBWriteInternationalStandingOrder4DataInitiationInstructedAmount `json:"InstructedAmount"`
	// Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
	NumberOfPayments *string `json:"NumberOfPayments,omitempty"`
	// Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
	// The list of valid codes is an external code list published separately.
	// External code sets can be downloaded from www.iso20022.org.
	Purpose *string `json:"Purpose,omitempty"`
	// Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
	// Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
	// If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
	Reference *string `json:"Reference,omitempty"`
	// Additional information that can not be captured in the structured fields and/or any other specific block.
	SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
}

type OBWriteInternationalStandingOrder4Data struct {
	// OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
	ConsentID string `json:"ConsentId"`
	// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
	Initiation OBWriteInternationalStandingOrder4DataInitiation `json:"Initiation"`
}

type OBWriteInternationalStandingOrder4 struct {
	Data OBWriteInternationalStandingOrder4Data `json:"Data"`
	// The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
	Risk OBRisk1 `json:"Risk"`
}
