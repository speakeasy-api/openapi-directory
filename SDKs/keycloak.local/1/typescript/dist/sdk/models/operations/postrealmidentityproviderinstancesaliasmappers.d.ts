import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
    identityProviderMapperRepresentation: shared.IdentityProviderMapperRepresentation;
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
