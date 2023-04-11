import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
    federatedIdentityRepresentation: shared.FederatedIdentityRepresentation;
    /**
     * User id
     */
    id: string;
    /**
     * Social login provider id
     */
    provider: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
