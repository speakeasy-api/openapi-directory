import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion } from "./googlecloudintegrationsv1alphaintegrationtemplateversion";
/**
 * Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.
 */
export declare class GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse extends SpeakeasyBase {
    /**
     * The IntegrationTemplateVersions which match the request.
     */
    integrationTemplateVersions?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
