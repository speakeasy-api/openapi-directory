import { SpeakeasyBase } from "../../../internal/utils";
import { V3Status } from "./v3status";
/**
 * Route names and numbers for all routes of all route types.
 */
export declare class V3RouteResponse extends SpeakeasyBase {
    route?: Record<string, any>;
    status?: V3Status;
}
