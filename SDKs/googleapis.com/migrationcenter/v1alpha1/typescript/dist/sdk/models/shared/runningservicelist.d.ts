import { SpeakeasyBase } from "../../../internal/utils";
import { RunningService } from "./runningservice";
/**
 * List of running guest OS services.
 */
export declare class RunningServiceList extends SpeakeasyBase {
    /**
     * Running service entries.
     */
    services?: RunningService[];
}
