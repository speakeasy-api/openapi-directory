import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest extends SpeakeasyBase {
    obstaclesByRoute: shared.ObstaclesByRoute;
    xApiKey?: string;
}
export declare class ObstaclesByRouteUsV1ObstaclesRouteQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each obstacle found.
     */
    obstacleRouteResponse?: shared.ObstacleRouteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
