import { SpeakeasyBase } from "../../../internal/utils";
import { V3RouteType } from "./v3routetype";
import { V3Status } from "./v3status";
/**
 * All route types (i.e. identifiers of transport modes) and their names.
 */
export declare class V3RouteTypesResponse extends SpeakeasyBase {
    /**
     * Transport mode identifiers
     */
    routeTypes?: V3RouteType[];
    status?: V3Status;
}
