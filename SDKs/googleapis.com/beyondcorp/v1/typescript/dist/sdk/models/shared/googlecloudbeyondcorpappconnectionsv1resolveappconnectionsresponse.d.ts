import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails } from "./googlecloudbeyondcorpappconnectionsv1resolveappconnectionsresponseappconnectiondetails";
/**
 * Response message for BeyondCorp.ResolveAppConnections.
 */
export declare class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse extends SpeakeasyBase {
    /**
     * A list of BeyondCorp AppConnections with details in the project.
     */
    appConnectionDetails?: GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
