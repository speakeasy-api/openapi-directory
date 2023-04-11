import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnector } from "./googlecloudbeyondcorpappconnectorsv1appconnector";
/**
 * Response message for BeyondCorp.ListAppConnectors.
 */
export declare class GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse extends SpeakeasyBase {
    /**
     * A list of BeyondCorp AppConnectors in the project.
     */
    appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1AppConnector[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
