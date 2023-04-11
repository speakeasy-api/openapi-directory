import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetGpgKeyForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * gpg_key_id parameter
     */
    gpgKeyId: number;
}
export declare class UsersGetGpgKeyForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    gpgKey?: shared.GpgKey;
}
