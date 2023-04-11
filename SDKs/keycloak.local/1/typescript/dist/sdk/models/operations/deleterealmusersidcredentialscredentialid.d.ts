import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmUsersIdCredentialsCredentialIdRequest extends SpeakeasyBase {
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
export declare class DeleteRealmUsersIdCredentialsCredentialIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
