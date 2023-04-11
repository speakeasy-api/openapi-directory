import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    identityProviderRepresentation?: shared.IdentityProviderRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
