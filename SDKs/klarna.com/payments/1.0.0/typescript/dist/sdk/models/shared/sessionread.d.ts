import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Attachment } from "./attachment";
import { CustomerRead } from "./customerread";
import { MerchantUrls } from "./merchanturls";
import { Options } from "./options";
import { OrderLine } from "./orderline";
import { PaymentMethodCategory } from "./paymentmethodcategory";
/**
 * The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.
 */
export declare enum SessionReadAcquiringChannelEnum {
    Ecommerce = "ECOMMERCE",
    InStore = "IN_STORE",
    Telesales = "TELESALES"
}
/**
 * Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.
 */
export declare enum SessionReadIntentEnum {
    Buy = "buy",
    Tokenize = "tokenize",
    BuyAndTokenize = "buy_and_tokenize"
}
/**
 * The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.
 */
export declare enum SessionReadStatusEnum {
    Complete = "complete",
    Incomplete = "incomplete"
}
/**
 * successful operation
 */
export declare class SessionRead extends SpeakeasyBase {
    /**
     * The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.
     */
    acquiringChannel?: SessionReadAcquiringChannelEnum;
    attachment?: Attachment;
    /**
     * Authorization token.
     */
    authorizationToken?: string;
    billingAddress?: Address;
    /**
     * Token to be passed to the JS client
     */
    clientToken?: string;
    /**
     * Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications.
     */
    customPaymentMethodIds?: string[];
    customer?: CustomerRead;
    /**
     * Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.
     */
    design?: string;
    /**
     * Session expiration date
     */
    expiresAt?: Date;
    /**
     * Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.
     */
    intent?: SessionReadIntentEnum;
    /**
     * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
     *
     * @remarks
     * The following values are applicable:
     *
     * AT: "de-AT", "de-DE", "en-DE"
     * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
     * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
     * DE: "de-DE", "de-AT", "en-DE"
     * DK: "da-DK", "en-DK"
     * ES: "es-ES", "ca-ES", "en-ES"
     * FI: "fi-FI", "sv-FI", "en-FI"
     * GB: "en-GB"
     * IT: "it-IT", "en-IT"
     * NL: "nl-NL", "en-NL"
     * NO: "nb-NO", "en-NO"
     * PL: "pl-PL", "en-PL"
     * SE: "sv-SE", "en-SE"
     * US: "en-US".
     */
    locale?: string;
    /**
     * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
     */
    merchantData?: string;
    /**
     * Used for storing merchant's internal order number or other reference.
     */
    merchantReference1?: string;
    /**
     * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
     */
    merchantReference2?: string;
    merchantUrls?: MerchantUrls;
    options?: Options;
    /**
     * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
     */
    orderAmount?: number;
    /**
     * The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.
     */
    orderLines?: OrderLine[];
    /**
     * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
     */
    orderTaxAmount?: number;
    /**
     * Available payment method categories
     */
    paymentMethodCategories?: PaymentMethodCategory[];
    /**
     * The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.
     */
    purchaseCountry?: string;
    /**
     * The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.
     */
    purchaseCurrency?: string;
    shippingAddress?: Address;
    /**
     * The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.
     */
    status?: SessionReadStatusEnum;
}
