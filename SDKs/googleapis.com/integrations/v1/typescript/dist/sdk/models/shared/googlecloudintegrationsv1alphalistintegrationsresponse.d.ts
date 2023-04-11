import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegration } from "./googlecloudintegrationsv1alphaintegration";
/**
 * Response for ListIntegrations.
 */
export declare class GoogleCloudIntegrationsV1alphaListIntegrationsResponse extends SpeakeasyBase {
    /**
     * The integrations which match the request.
     */
    integrations?: GoogleCloudIntegrationsV1alphaIntegration[];
    /**
     * The next page token for the response.
     */
    nextPageToken?: string;
}
