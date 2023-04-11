import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSfdcChannel } from "./googlecloudintegrationsv1alphasfdcchannel";
/**
 * Response to list SfdcChannels.
 */
export declare class GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse extends SpeakeasyBase {
    /**
     * The token used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of SfdcChannels retrieved.
     */
    sfdcChannels?: GoogleCloudIntegrationsV1alphaSfdcChannel[];
}
