import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspension } from "./googlecloudintegrationsv1alphasuspension";
/**
 * Response for Suspensions.ListSuspensions.
 */
export declare class GoogleCloudIntegrationsV1alphaListSuspensionsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The suspensions for the relevant execution which the caller has permissions to view and resolve.
     */
    suspensions?: GoogleCloudIntegrationsV1alphaSuspension[];
}
