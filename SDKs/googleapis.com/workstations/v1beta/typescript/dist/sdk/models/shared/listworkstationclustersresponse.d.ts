import { SpeakeasyBase } from "../../../internal/utils";
import { WorkstationCluster } from "./workstationcluster";
/**
 * Response message for ListWorkstationClusters.
 */
export declare class ListWorkstationClustersResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Unreachable resources.
     */
    unreachable?: string[];
    /**
     * The requested workstation clusters.
     */
    workstationClusters?: WorkstationCluster[];
}
