import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmUsersIdResetPasswordRequest extends SpeakeasyBase {
    /**
     * The representation must contain a rawPassword with the plain-text password
     */
    credentialRepresentation: shared.CredentialRepresentation;
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmUsersIdResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
