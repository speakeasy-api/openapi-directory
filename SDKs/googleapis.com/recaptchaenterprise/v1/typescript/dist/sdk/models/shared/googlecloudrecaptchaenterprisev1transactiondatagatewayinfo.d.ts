import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the transaction from the gateway.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo extends SpeakeasyBase {
    /**
     * AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).
     */
    avsResponseCode?: string;
    /**
     * CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).
     */
    cvvResponseCode?: string;
    /**
     * Gateway response code describing the state of the transaction.
     */
    gatewayResponseCode?: string;
    /**
     * Name of the gateway service (for example, stripe, square, paypal).
     */
    name?: string;
}
