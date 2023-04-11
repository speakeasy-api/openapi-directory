import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSfdcInstance } from "./googlecloudintegrationsv1alphasfdcinstance";
/**
 * Response to list SfdcInstances.
 */
export declare class GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse extends SpeakeasyBase {
    /**
     * The token used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of SfdcInstances retrieved.
     */
    sfdcInstances?: GoogleCloudIntegrationsV1alphaSfdcInstance[];
}
