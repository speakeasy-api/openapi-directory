import { SpeakeasyBase } from "../../../internal/utils";
import { ScreenshotCluster } from "./screenshotcluster";
/**
 * Successful response
 */
export declare class ListScreenshotClustersResponse extends SpeakeasyBase {
    /**
     * The set of clusters associated with an execution Always set
     */
    clusters?: ScreenshotCluster[];
}
