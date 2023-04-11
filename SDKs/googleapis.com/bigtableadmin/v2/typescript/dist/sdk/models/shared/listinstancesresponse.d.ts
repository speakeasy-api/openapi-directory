import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for BigtableInstanceAdmin.ListInstances.
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    /**
     * Locations from which Instance information could not be retrieved, due to an outage or some other transient condition. Instances whose Clusters are all in one of the failed locations may be missing from `instances`, and Instances with at least one Cluster in a failed location may only have partial information returned. Values are of the form `projects//locations/`
     */
    failedLocations?: string[];
    /**
     * The list of requested instances.
     */
    instances?: Instance[];
    /**
     * DEPRECATED: This field is unused and ignored.
     */
    nextPageToken?: string;
}
