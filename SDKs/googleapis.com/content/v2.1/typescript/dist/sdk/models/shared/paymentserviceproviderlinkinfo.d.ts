import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information required for PAYMENT_SERVICE_PROVIDER link type.
 */
export declare class PaymentServiceProviderLinkInfo extends SpeakeasyBase {
    /**
     * The business country of the merchant account as identified by the third party service provider.
     */
    externalAccountBusinessCountry?: string;
    /**
     * The id used by the third party service provider to identify the merchant.
     */
    externalAccountId?: string;
}
