import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Geometry-defining arguments for polygon requests
 */
export declare class AirspaceByPolygon extends SpeakeasyBase {
    asptypes: string[];
    poly: Record<string, any>;
}
