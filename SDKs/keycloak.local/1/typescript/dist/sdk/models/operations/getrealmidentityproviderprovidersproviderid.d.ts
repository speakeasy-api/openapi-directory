import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmIdentityProviderProvidersProviderIdRequest extends SpeakeasyBase {
    /**
     * Provider id
     */
    providerId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmIdentityProviderProvidersProviderIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
