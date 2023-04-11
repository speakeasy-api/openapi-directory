import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
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
export declare class DeleteRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
