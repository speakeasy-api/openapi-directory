import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
    identityProviderRepresentation: shared.IdentityProviderRepresentation;
    alias: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
