import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Response message for BigtableInstanceAdmin.ListClusters.
 */
export declare class ListClustersResponse extends SpeakeasyBase {
    /**
     * The list of requested clusters.
     */
    clusters?: Cluster[];
    /**
     * Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from `clusters`, or may only have partial information returned. Values are of the form `projects//locations/`
     */
    failedLocations?: string[];
    /**
     * DEPRECATED: This field is unused and ignored.
     */
    nextPageToken?: string;
}
