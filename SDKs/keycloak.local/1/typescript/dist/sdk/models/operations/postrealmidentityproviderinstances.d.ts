import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
    /**
     * JSON body
     */
    identityProviderRepresentation: shared.IdentityProviderRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
