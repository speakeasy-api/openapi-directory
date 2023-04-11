import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest extends SpeakeasyBase {
    /**
     * The credential to move
     */
    credentialId: string;
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
