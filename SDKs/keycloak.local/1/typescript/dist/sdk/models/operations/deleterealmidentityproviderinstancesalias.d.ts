import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
