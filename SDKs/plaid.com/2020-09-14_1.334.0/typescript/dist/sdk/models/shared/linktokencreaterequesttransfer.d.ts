import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for use with the Transfer product.
 */
export declare class LinkTokenCreateRequestTransfer extends SpeakeasyBase {
    /**
     * The `id` returned by the `/transfer/intent/create` endpoint.
     */
    intentId?: string;
    /**
     * The `payment_profile_token` returned by the `/payment_profile/create` endpoint.
     */
    paymentProfileToken?: string;
}
