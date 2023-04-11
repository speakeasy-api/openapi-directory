import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
    identityProviderMapperRepresentation: shared.IdentityProviderMapperRepresentation;
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
export declare class PutRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
