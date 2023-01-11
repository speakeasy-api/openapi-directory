import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A First Mile account information request body
**/
export declare class ConnectFirstmileRequestBody extends SpeakeasyBase {
    mailerId: string;
    nickname: string;
    password: string;
    profileName?: string;
}
