import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRealmUsersIdCredentialsCredentialIdUserLabelRequest extends SpeakeasyBase {
    requestBody: string;
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
export declare class PutRealmUsersIdCredentialsCredentialIdUserLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
