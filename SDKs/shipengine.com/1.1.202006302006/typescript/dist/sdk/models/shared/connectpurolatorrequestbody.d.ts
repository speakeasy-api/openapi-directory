import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Purolator account information request body
**/
export declare class ConnectPurolatorRequestBody extends SpeakeasyBase {
    accountNumber: string;
    activationKey: string;
    nickname: string;
}
