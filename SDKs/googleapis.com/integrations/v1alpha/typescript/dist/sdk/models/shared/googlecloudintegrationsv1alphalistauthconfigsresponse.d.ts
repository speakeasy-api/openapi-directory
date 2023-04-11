import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAuthConfig } from "./googlecloudintegrationsv1alphaauthconfig";
/**
 * Response to list AuthConfigs.
 */
export declare class GoogleCloudIntegrationsV1alphaListAuthConfigsResponse extends SpeakeasyBase {
    /**
     * The list of AuthConfigs retrieved.
     */
    authConfigs?: GoogleCloudIntegrationsV1alphaAuthConfig[];
    /**
     * The token used to retrieve the next page of results.
     */
    nextPageToken?: string;
}
