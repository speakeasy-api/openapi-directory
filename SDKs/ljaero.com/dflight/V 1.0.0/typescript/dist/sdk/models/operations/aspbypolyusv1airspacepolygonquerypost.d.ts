import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AspByPolyUsV1AirspacePolygonQueryPostRequest extends SpeakeasyBase {
    airspaceByPolygon: shared.AirspaceByPolygon;
    xApiKey?: string;
}
export declare class AspByPolyUsV1AirspacePolygonQueryPostResponse extends SpeakeasyBase {
    /**
     * A list of GeoJSON FeatureCollections, one for each Airspace type requested.
     */
    airspacePolyResponse?: shared.AirspacePolyResponse;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
