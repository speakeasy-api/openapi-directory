import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * ListClustersResponse is the result of ListClustersRequest.
 */
export declare class ListClustersResponse extends SpeakeasyBase {
    /**
     * A list of clusters in the project in the specified zone, or across all ones.
     */
    clusters?: Cluster[];
    /**
     * If any zones are listed here, the list of clusters returned may be missing those zones.
     */
    missingZones?: string[];
}
