import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Endicia account information request body
**/
export declare class ConnectEndiciaRequestBody extends SpeakeasyBase {
    account: string;
    nickname: string;
    passphrase: string;
}
