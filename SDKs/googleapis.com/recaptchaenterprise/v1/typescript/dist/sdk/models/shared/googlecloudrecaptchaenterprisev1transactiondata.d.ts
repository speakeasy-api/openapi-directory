import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1TransactionDataAddress } from "./googlecloudrecaptchaenterprisev1transactiondataaddress";
import { GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo } from "./googlecloudrecaptchaenterprisev1transactiondatagatewayinfo";
import { GoogleCloudRecaptchaenterpriseV1TransactionDataItem } from "./googlecloudrecaptchaenterprisev1transactiondataitem";
import { GoogleCloudRecaptchaenterpriseV1TransactionDataUser } from "./googlecloudrecaptchaenterprisev1transactiondatauser";
/**
 * Transaction data associated with a payment protected by reCAPTCHA Enterprise. All fields are optional.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TransactionData extends SpeakeasyBase {
    /**
     * Structured address format for billing and shipping addresses.
     */
    billingAddress?: GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;
    /**
     * The Bank Identification Number - generally the first 6 or 8 digits of the card.
     */
    cardBin?: string;
    /**
     * The last four digits of the card.
     */
    cardLastFour?: string;
    /**
     * The currency code in ISO-4217 format.
     */
    currencyCode?: string;
    /**
     * Details about the transaction from the gateway.
     */
    gatewayInfo?: GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo;
    /**
     * Items purchased in this transaction.
     */
    items?: GoogleCloudRecaptchaenterpriseV1TransactionDataItem[];
    /**
     * Information about the user or users fulfilling the transaction.
     */
    merchants?: GoogleCloudRecaptchaenterpriseV1TransactionDataUser[];
    /**
     * The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name} (If a third-party is used, for example, processor-paypal) * custom-{name} (If an alternative method is used, for example, custom-crypto)
     */
    paymentMethod?: string;
    /**
     * Structured address format for billing and shipping addresses.
     */
    shippingAddress?: GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;
    /**
     * The value of shipping in the specified currency. 0 for free or no shipping.
     */
    shippingValue?: number;
    /**
     * Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.
     */
    transactionId?: string;
    /**
     * Details about a user's account involved in the transaction.
     */
    user?: GoogleCloudRecaptchaenterpriseV1TransactionDataUser;
    /**
     * The decimal value of the transaction in the specified currency.
     */
    value?: number;
}
