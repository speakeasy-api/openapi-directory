import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Canada Post account information request body
**/
export declare class ConnectCanadaPostRequestBody extends SpeakeasyBase {
    accountNumber: string;
    apiKey: string;
    apiSecret: string;
    contractId: string;
    nickname: string;
}
