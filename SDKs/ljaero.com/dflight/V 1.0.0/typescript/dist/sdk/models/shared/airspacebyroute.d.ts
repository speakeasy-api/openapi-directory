import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Geometry-defining arguments for along-route requests
 */
export declare class AirspaceByRoute extends SpeakeasyBase {
    asptypes: string[];
    route: Record<string, any>;
}
