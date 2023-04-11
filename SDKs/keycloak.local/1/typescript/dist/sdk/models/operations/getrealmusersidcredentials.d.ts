import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersIdCredentialsRequest extends SpeakeasyBase {
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmUsersIdCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    credentialRepresentations?: shared.CredentialRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
