import { SpeakeasyBase } from "../../../internal/utils";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
/**
 * All trip/service run details for the specified route ID.
 */
export declare class V3RunsResponse extends SpeakeasyBase {
    /**
     * Individual trips/services of a route
     */
    runs?: V3Run[];
    status?: V3Status;
}
