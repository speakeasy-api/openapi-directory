import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest extends SpeakeasyBase {
    obstaclesByPolygon: shared.ObstaclesByPolygon;
    xApiKey?: string;
}
export declare class ObstaclesByPolyUsV1ObstaclesPolygonQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each obstacle found.
     */
    obstaclePolyResponse?: shared.ObstaclePolyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
