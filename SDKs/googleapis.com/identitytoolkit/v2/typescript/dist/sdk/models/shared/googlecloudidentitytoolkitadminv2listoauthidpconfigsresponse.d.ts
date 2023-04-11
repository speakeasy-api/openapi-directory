import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig } from "./googlecloudidentitytoolkitadminv2oauthidpconfig";
/**
 * Response for ListOAuthIdpConfigs
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The set of configs.
     */
    oauthIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[];
}
