import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccountPaymentDetails } from "./bankaccountpaymentdetails";
import { CardPaymentDetails } from "./cardpaymentdetails";
import { CashPaymentDetails } from "./cashpaymentdetails";
import { DigitalWalletDetails } from "./digitalwalletdetails";
import { ExternalPaymentDetails } from "./externalpaymentdetails";
import { Money } from "./money";
import { ProcessingFee } from "./processingfee";
import { RiskEvaluation } from "./riskevaluation";
/**
 * Represents a payment processed by the Square API.
 */
export declare class Payment extends SpeakeasyBase {
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    appFeeMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    approvedMoney?: Money;
    /**
     * Additional details about BANK_ACCOUNT type payments.
     */
    bankAccountDetails?: BankAccountPaymentDetails;
    /**
     * Represents a postal address in a country. The address format is based
     *
     * @remarks
     * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
     * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
     * This format has dedicated fields for four address components: postal code,
     * locality (city), administrative district (state, prefecture, or province), and
     * sublocality (town or village). These components have dedicated fields in the
     * `Address` object because software sometimes behaves differently based on them.
     * For example, sales tax software may charge different amounts of sales tax
     * based on the postal code, and some software is only available in
     * certain states due to compliance reasons.
     *
     * For the remaining address components, the `Address` type provides the
     * `address_line_1` and `address_line_2` fields for free-form data entry.
     * These fields are free-form because the remaining address components have
     * too many variations around the world and typical software does not parse
     * these components. These fields enable users to enter anything they want.
     *
     * Note that, in the current implementation, all other `Address` type fields are blank.
     * These include `address_line_3`, `sublocality_2`, `sublocality_3`,
     * `administrative_district_level_2`, `administrative_district_level_3`,
     * `first_name`, `last_name`, and `organization`.
     *
     * When it comes to localization, the seller's language preferences
     * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
     * are ignored for addresses. Even though Square products (such as Square Point of Sale
     * and the Seller Dashboard) mostly use a seller's language preference in
     * communication, when it comes to addresses, they will use English for a US address,
     * Japanese for an address in Japan, and so on.
     */
    billingAddress?: Address;
    /**
     * The buyer's email address.
     */
    buyerEmailAddress?: string;
    /**
     * Actions that can be performed on this payment:
     *
     * @remarks
     * - `EDIT_AMOUNT_UP` - The payment amount can be edited up.
     * - `EDIT_AMOUNT_DOWN` - The payment amount can be edited down.
     * - `EDIT_TIP_AMOUNT_UP` - The tip amount can be edited up.
     * - `EDIT_TIP_AMOUNT_DOWN` - The tip amount can be edited down.
     */
    capabilities?: string[];
    /**
     * Reflects the current status of a card payment. Contains only non-confidential information.
     */
    cardDetails?: CardPaymentDetails;
    /**
     * Stores details about a cash payment. Contains only non-confidential information. For more information, see
     *
     * @remarks
     * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
     */
    cashDetails?: CashPaymentDetails;
    /**
     * The timestamp of when the payment was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The [Customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) ID of the customer associated with the payment.
     */
    customerId?: string;
    /**
     * The action to be applied to the payment when the `delay_duration` has elapsed. This field
     *
     * @remarks
     * is read-only.
     *
     * Current values include `CANCEL`.
     */
    delayAction?: string;
    /**
     * The duration of time after the payment's creation when Square automatically applies the
     *
     * @remarks
     * `delay_action` to the payment. This automatic `delay_action` applies only to payments that
     * do not reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delay_duration`
     * time period.
     *
     * This field is specified as a time duration, in RFC 3339 format.
     *
     * Notes:
     * This feature is only supported for card payments.
     *
     * Default:
     *
     * - Card-present payments: "PT36H" (36 hours) from the creation time.
     * - Card-not-present payments: "P7D" (7 days) from the creation time.
     */
    delayDuration?: string;
    /**
     * The read-only timestamp of when the `delay_action` is automatically applied,
     *
     * @remarks
     * in RFC 3339 format.
     *
     * Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
     * fields. The `created_at` field is generated by Square and might not exactly match the
     * time on your local machine.
     */
    delayedUntil?: string;
    /**
     * An optional ID of the employee associated with taking the payment.
     */
    employeeId?: string;
    /**
     * Stores details about an external payment. Contains only non-confidential information.
     *
     * @remarks
     * For more information, see
     * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
     */
    externalDetails?: ExternalPaymentDetails;
    /**
     * A unique ID for the payment.
     */
    id?: string;
    /**
     * The ID of the location associated with the payment.
     */
    locationId?: string;
    /**
     * An optional note to include when creating a payment.
     */
    note?: string;
    /**
     * The ID of the order associated with the payment.
     */
    orderId?: string;
    /**
     * The processing fees and fee adjustments assessed by Square for this payment.
     */
    processingFee?: ProcessingFee[];
    /**
     * The payment's receipt number.
     *
     * @remarks
     * The field is missing if a payment is canceled.
     */
    receiptNumber?: string;
    /**
     * The URL for the payment's receipt.
     *
     * @remarks
     * The field is only populated for COMPLETED payments.
     */
    receiptUrl?: string;
    /**
     * An optional ID that associates the payment with an entity in
     *
     * @remarks
     * another system.
     */
    referenceId?: string;
    /**
     * A list of `refund_id`s identifying refunds for the payment.
     */
    refundIds?: string[];
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    refundedMoney?: Money;
    /**
     * Represents fraud risk information for the associated payment.
     *
     * @remarks
     *
     * When you take a payment through Square's Payments API (using the `CreatePayment`
     * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
     * can use this information to determine the course of action (for example,
     * provide the goods/services or refund the payment).
     */
    riskEvaluation?: RiskEvaluation;
    /**
     * Represents a postal address in a country. The address format is based
     *
     * @remarks
     * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
     * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
     * This format has dedicated fields for four address components: postal code,
     * locality (city), administrative district (state, prefecture, or province), and
     * sublocality (town or village). These components have dedicated fields in the
     * `Address` object because software sometimes behaves differently based on them.
     * For example, sales tax software may charge different amounts of sales tax
     * based on the postal code, and some software is only available in
     * certain states due to compliance reasons.
     *
     * For the remaining address components, the `Address` type provides the
     * `address_line_1` and `address_line_2` fields for free-form data entry.
     * These fields are free-form because the remaining address components have
     * too many variations around the world and typical software does not parse
     * these components. These fields enable users to enter anything they want.
     *
     * Note that, in the current implementation, all other `Address` type fields are blank.
     * These include `address_line_3`, `sublocality_2`, `sublocality_3`,
     * `administrative_district_level_2`, `administrative_district_level_3`,
     * `first_name`, `last_name`, and `organization`.
     *
     * When it comes to localization, the seller's language preferences
     * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
     * are ignored for addresses. Even though Square products (such as Square Point of Sale
     * and the Seller Dashboard) mostly use a seller's language preference in
     * communication, when it comes to addresses, they will use English for a US address,
     * Japanese for an address in Japan, and so on.
     */
    shippingAddress?: Address;
    /**
     * The source type for this payment.
     *
     * @remarks
     *
     * Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, or `EXTERNAL`.
     */
    sourceType?: string;
    /**
     * Additional payment information that gets added to the customer's card statement
     *
     * @remarks
     * as part of the statement description.
     *
     * Note that the `statement_description_identifier` might get truncated on the statement description
     * to fit the required information including the Square identifier (SQ *) and the name of the
     * seller taking the payment.
     */
    statementDescriptionIdentifier?: string;
    /**
     * Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED.
     */
    status?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    tipMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalMoney?: Money;
    /**
     * The timestamp of when the payment was last updated, in RFC 3339 format.
     */
    updatedAt?: string;
    /**
     * Used for optimistic concurrency. This opaque token identifies a specific version of the
     *
     * @remarks
     * `Payment` object.
     */
    versionToken?: string;
    /**
     * Additional details about `WALLET` type payments. Contains only non-confidential information.
     */
    walletDetails?: DigitalWalletDetails;
}
