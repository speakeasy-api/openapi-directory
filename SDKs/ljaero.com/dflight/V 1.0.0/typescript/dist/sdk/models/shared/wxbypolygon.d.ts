import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Geometry-defining arguments for polygon requests
 */
export declare class WxByPolygon extends SpeakeasyBase {
    hours: number;
    poly: Record<string, any>;
    wxtypes: string[];
}
