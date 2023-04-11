import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AspByDistanceUsV1AirspaceDistanceQueryPostRequest extends SpeakeasyBase {
    airspaceByDistance: shared.AirspaceByDistance;
    xApiKey?: string;
}
export declare class AspByDistanceUsV1AirspaceDistanceQueryPostResponse extends SpeakeasyBase {
    /**
     * A list of GeoJSON FeatureCollections, one for each Airspace type requested.
     */
    airspaceDistanceResponse?: shared.AirspaceDistanceResponse;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
