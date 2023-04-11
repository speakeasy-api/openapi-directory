import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    identityProviderMapperRepresentations?: shared.IdentityProviderMapperRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
