import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
    alias: string;
    /**
     * Mapper id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    identityProviderMapperRepresentation?: shared.IdentityProviderMapperRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
