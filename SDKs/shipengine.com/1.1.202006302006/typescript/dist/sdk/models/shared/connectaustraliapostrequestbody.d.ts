import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Australia Post account information request body
**/
export declare class ConnectAustraliaPostRequestBody extends SpeakeasyBase {
    accountNumber: string;
    apiKey: string;
    apiSecret: string;
    nickname: string;
}
