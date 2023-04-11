import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationVersion } from "./googlecloudintegrationsv1alphaintegrationversion";
/**
 * Response for ListIntegrationVersions.
 */
export declare class GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse extends SpeakeasyBase {
    /**
     * The integrations which match the request.
     */
    integrationVersions?: GoogleCloudIntegrationsV1alphaIntegrationVersion[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Whether the user has no permission on the version or not.
     */
    noPermission?: boolean;
}
