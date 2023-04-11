import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest extends SpeakeasyBase {
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmUsersIdConfiguredUserStorageCredentialTypes2XXApplicationJSONStrings?: string[];
}
