import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig } from "./googlecloudidentitytoolkitadminv2defaultsupportedidpconfig";
/**
 * Response for DefaultSupportedIdpConfigs
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse extends SpeakeasyBase {
    /**
     * The set of configs.
     */
    defaultSupportedIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
