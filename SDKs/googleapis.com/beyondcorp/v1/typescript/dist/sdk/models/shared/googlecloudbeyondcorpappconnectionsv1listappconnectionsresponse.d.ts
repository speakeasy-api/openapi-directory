import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnection } from "./googlecloudbeyondcorpappconnectionsv1appconnection";
/**
 * Response message for BeyondCorp.ListAppConnections.
 */
export declare class GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse extends SpeakeasyBase {
    /**
     * A list of BeyondCorp AppConnections in the project.
     */
    appConnections?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
