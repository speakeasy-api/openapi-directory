/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OBChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { OBPostalAddress6 } from "./obpostaladdress6";
import { OBRisk1 } from "./obrisk1";
import { OBSCASupportData1 } from "./obscasupportdata1";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Type of authorisation flow requested.
 */
export enum OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum {
  Any = "Any",
  Single = "Single",
}

/**
 * The authorisation type request from the TPP.
 */
export class OBWriteInternationalConsent5DataAuthorisation extends SpeakeasyBase {
  /**
   * Type of authorisation flow requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "AuthorisationType" })
  authorisationType: OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;

  /**
   * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
   *
   * @remarks
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  @SpeakeasyMetadata()
  @Expose({ name: "CompletionDateTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completionDateTime?: Date;
}

/**
 * Party to which an amount of money is due.
 */
export class OBWriteInternationalConsent5DataInitiationCreditor extends SpeakeasyBase {
  /**
   * Name by which a party is known and which is usually used to identify that party.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  /**
   * Information that locates and identifies a specific address, as defined by postal services.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "PostalAddress" })
  @Type(() => OBPostalAddress6)
  postalAddress?: OBPostalAddress6;
}

/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
 */
export class OBWriteInternationalConsent5DataInitiationCreditorAccount extends SpeakeasyBase {
  /**
   * Identification assigned by an institution to identify an account. This identification is known by the account owner.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Identification" })
  identification: string;

  /**
   * The account name is the name or names of the account owner(s) represented at an account level.
   *
   * @remarks
   * Note, the account name is not the product name or the nickname of the account.
   * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name: string;

  /**
   * Name of the identification scheme, in a coded form as published in an external list.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SchemeName" })
  schemeName: string;

  /**
   * This is secondary identification of the account, as assigned by the account servicing institution.
   *
   * @remarks
   * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SecondaryIdentification" })
  secondaryIdentification?: string;
}

/**
 * Financial institution servicing an account for the creditor.
 */
export class OBWriteInternationalConsent5DataInitiationCreditorAgent extends SpeakeasyBase {
  /**
   * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Identification" })
  identification?: string;

  /**
   * Name by which an agent is known and which is usually used to identify that agent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  /**
   * Information that locates and identifies a specific address, as defined by postal services.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "PostalAddress" })
  @Type(() => OBPostalAddress6)
  postalAddress?: OBPostalAddress6;

  /**
   * Name of the identification scheme, in a coded form as published in an external list.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SchemeName" })
  schemeName?: string;
}

/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
 */
export class OBWriteInternationalConsent5DataInitiationDebtorAccount extends SpeakeasyBase {
  /**
   * Identification assigned by an institution to identify an account. This identification is known by the account owner.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Identification" })
  identification: string;

  /**
   * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
   *
   * @remarks
   * Note, the account name is not the product name or the nickname of the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  /**
   * Name of the identification scheme, in a coded form as published in an external list.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SchemeName" })
  schemeName: string;

  /**
   * This is secondary identification of the account, as assigned by the account servicing institution.
   *
   * @remarks
   * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SecondaryIdentification" })
  secondaryIdentification?: string;
}

/**
 * Specifies the type used to complete the currency exchange.
 */
export enum OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum {
  Actual = "Actual",
  Agreed = "Agreed",
  Indicative = "Indicative",
}

/**
 * Provides details on the currency exchange rate and contract.
 */
export class OBWriteInternationalConsent5DataInitiationExchangeRateInformation extends SpeakeasyBase {
  /**
   * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ContractIdentification" })
  contractIdentification?: string;

  /**
   * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ExchangeRate" })
  exchangeRate?: number;

  /**
   * Specifies the type used to complete the currency exchange.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "RateType" })
  rateType: OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;

  /**
   * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "UnitCurrency" })
  unitCurrency: string;
}

/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 *
 * @remarks
 * Usage: This amount has to be transported unchanged through the transaction chain.
 */
export class OBWriteInternationalConsent5DataInitiationInstructedAmount extends SpeakeasyBase {
  /**
   * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Amount" })
  amount: string;

  /**
   * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Currency" })
  currency: string;
}

/**
 * Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.
 */
export enum OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum {
  Normal = "Normal",
  Urgent = "Urgent",
}

/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
 */
export class OBWriteInternationalConsent5DataInitiationRemittanceInformation extends SpeakeasyBase {
  /**
   * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
   *
   * @remarks
   * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
   * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
   * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Reference" })
  reference?: string;

  /**
   * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Unstructured" })
  unstructured?: string;
}

/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
 */
export class OBWriteInternationalConsent5DataInitiation extends SpeakeasyBase {
  /**
   * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ChargeBearer" })
  chargeBearer?: OBChargeBearerType1CodeEnum;

  /**
   * Party to which an amount of money is due.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Creditor" })
  @Type(() => OBWriteInternationalConsent5DataInitiationCreditor)
  creditor?: OBWriteInternationalConsent5DataInitiationCreditor;

  /**
   * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "CreditorAccount" })
  @Type(() => OBWriteInternationalConsent5DataInitiationCreditorAccount)
  creditorAccount: OBWriteInternationalConsent5DataInitiationCreditorAccount;

  /**
   * Financial institution servicing an account for the creditor.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "CreditorAgent" })
  @Type(() => OBWriteInternationalConsent5DataInitiationCreditorAgent)
  creditorAgent?: OBWriteInternationalConsent5DataInitiationCreditorAgent;

  /**
   * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "CurrencyOfTransfer" })
  currencyOfTransfer: string;

  /**
   * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "DebtorAccount" })
  @Type(() => OBWriteInternationalConsent5DataInitiationDebtorAccount)
  debtorAccount?: OBWriteInternationalConsent5DataInitiationDebtorAccount;

  /**
   * Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "DestinationCountryCode" })
  destinationCountryCode?: string;

  /**
   * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
   *
   * @remarks
   * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
   * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "EndToEndIdentification" })
  endToEndIdentification: string;

  /**
   * Provides details on the currency exchange rate and contract.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ExchangeRateInformation" })
  @Type(() => OBWriteInternationalConsent5DataInitiationExchangeRateInformation)
  exchangeRateInformation?: OBWriteInternationalConsent5DataInitiationExchangeRateInformation;

  /**
   * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ExtendedPurpose" })
  extendedPurpose?: string;

  /**
   * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
   *
   * @remarks
   * Usage: This amount has to be transported unchanged through the transaction chain.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "InstructedAmount" })
  @Type(() => OBWriteInternationalConsent5DataInitiationInstructedAmount)
  instructedAmount: OBWriteInternationalConsent5DataInitiationInstructedAmount;

  /**
   * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
   *
   * @remarks
   * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "InstructionIdentification" })
  instructionIdentification: string;

  /**
   * Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "InstructionPriority" })
  instructionPriority?: OBWriteInternationalConsent5DataInitiationInstructionPriorityEnum;

  /**
   * User community specific instrument.
   *
   * @remarks
   * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "LocalInstrument" })
  localInstrument?: string;

  /**
   * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
   *
   * @remarks
   * The list of valid codes is an external code list published separately.
   * External code sets can be downloaded from www.iso20022.org.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Purpose" })
  purpose?: string;

  /**
   * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "RemittanceInformation" })
  @Type(() => OBWriteInternationalConsent5DataInitiationRemittanceInformation)
  remittanceInformation?: OBWriteInternationalConsent5DataInitiationRemittanceInformation;

  /**
   * Additional information that can not be captured in the structured fields and/or any other specific block.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SupplementaryData" })
  supplementaryData?: Record<string, any>;
}

/**
 * Specifies to share the refund account details with PISP
 */
export enum OBWriteInternationalConsent5DataReadRefundAccountEnum {
  No = "No",
  Yes = "Yes",
}

export class OBWriteInternationalConsent5Data extends SpeakeasyBase {
  /**
   * The authorisation type request from the TPP.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Authorisation" })
  @Type(() => OBWriteInternationalConsent5DataAuthorisation)
  authorisation?: OBWriteInternationalConsent5DataAuthorisation;

  /**
   * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Initiation" })
  @Type(() => OBWriteInternationalConsent5DataInitiation)
  initiation: OBWriteInternationalConsent5DataInitiation;

  /**
   * Specifies to share the refund account details with PISP
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ReadRefundAccount" })
  readRefundAccount?: OBWriteInternationalConsent5DataReadRefundAccountEnum;

  /**
   * Supporting Data provided by TPP, when requesting SCA Exemption.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "SCASupportData" })
  @Type(() => OBSCASupportData1)
  scaSupportData?: OBSCASupportData1;
}

export class OBWriteInternationalConsent5 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Data" })
  @Type(() => OBWriteInternationalConsent5Data)
  data: OBWriteInternationalConsent5Data;

  /**
   * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Risk" })
  @Type(() => OBRisk1)
  risk: OBRisk1;
}
