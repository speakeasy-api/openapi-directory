import { SpeakeasyBase } from "../../../internal/utils";
import { StoreCluster } from "./storecluster";
/**
 * Successful response
 */
export declare class StoreLayoutClustersListResponse extends SpeakeasyBase {
    /**
     * A store cluster of an enterprise.
     */
    cluster?: StoreCluster[];
}
