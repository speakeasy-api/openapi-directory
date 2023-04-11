import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Amazon account information request body
 */
export declare class ConnectAmazonBuyShippingRequestBody extends SpeakeasyBase {
    email: string;
    merchantSellerId: string;
    mwsAuthToken: string;
    /**
     * Nickname to be associated with the account connection
     */
    nickname: string;
}
