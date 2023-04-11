import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Geometry-defining arguments for along-route requests
 */
export declare class WxByRoute extends SpeakeasyBase {
    hours: number;
    route: Record<string, any>;
    wxtypes: string[];
}
