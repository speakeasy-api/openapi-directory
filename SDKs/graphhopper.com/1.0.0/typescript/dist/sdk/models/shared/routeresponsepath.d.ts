import { SpeakeasyBase } from "../../../internal/utils";
export declare class RouteResponsePathInstructions extends SpeakeasyBase {
    distance?: number;
    exitNumber?: number;
    interval?: number[];
    sign?: number;
    streetName?: string;
    text?: string;
    time?: number;
    turnAngle?: number;
}
export declare class RouteResponsePath extends SpeakeasyBase {
    ascend?: number;
    bbox?: number[];
    descend?: number;
    details?: Record<string, any>;
    distance?: number;
    instructions?: RouteResponsePathInstructions[];
    points?: Record<string, any>;
    pointsEncoded?: boolean;
    pointsOrder?: number[];
    snappedWaypoints?: Record<string, any>;
    time?: number;
}
