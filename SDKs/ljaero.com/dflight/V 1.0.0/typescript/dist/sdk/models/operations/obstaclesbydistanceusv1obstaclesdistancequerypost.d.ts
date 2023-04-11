import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest extends SpeakeasyBase {
    obstaclesByDistance: shared.ObstaclesByDistance;
    xApiKey?: string;
}
export declare class ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each obstacle found.
     */
    obstacleDistanceResponse?: shared.ObstacleDistanceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
