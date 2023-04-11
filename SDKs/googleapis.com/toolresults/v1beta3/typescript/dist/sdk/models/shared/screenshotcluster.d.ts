import { SpeakeasyBase } from "../../../internal/utils";
import { Screen } from "./screen";
/**
 * Successful response
 */
export declare class ScreenshotCluster extends SpeakeasyBase {
    /**
     * A string that describes the activity of every screen in the cluster.
     */
    activity?: string;
    /**
     * A unique identifier for the cluster. @OutputOnly
     */
    clusterId?: string;
    keyScreen?: Screen;
    /**
     * Full list of screens.
     */
    screens?: Screen[];
}
