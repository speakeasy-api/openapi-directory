import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationClientAuthenticatorProvidersRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationClientAuthenticatorProvidersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmAuthenticationClientAuthenticatorProviders2XXApplicationJSONObjects?: Record<string, any>[];
}
