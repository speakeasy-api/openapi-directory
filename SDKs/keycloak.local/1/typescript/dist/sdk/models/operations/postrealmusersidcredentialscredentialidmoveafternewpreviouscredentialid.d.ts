import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest extends SpeakeasyBase {
    /**
     * The credential to move
     */
    credentialId: string;
    /**
     * User id
     */
    id: string;
    /**
     * The credential that will be the previous element in the list. If set to null, the moved credential will be the first element in the list.
     */
    newPreviousCredentialId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
