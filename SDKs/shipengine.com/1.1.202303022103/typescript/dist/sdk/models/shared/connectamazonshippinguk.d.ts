import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Amazon Shipping UK account information request body
 */
export declare class ConnectAmazonShippingUk extends SpeakeasyBase {
    /**
     * Amazon UK Shipping auth code.
     */
    authCode: string;
    /**
     * The nickname associated with the carrier connection
     */
    nickname: string;
}
