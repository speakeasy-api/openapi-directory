import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    identityProviderRepresentations?: shared.IdentityProviderRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
