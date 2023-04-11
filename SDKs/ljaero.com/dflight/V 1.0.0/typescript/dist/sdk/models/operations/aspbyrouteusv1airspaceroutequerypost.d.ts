import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AspByRouteUsV1AirspaceRouteQueryPostRequest extends SpeakeasyBase {
    airspaceByRoute: shared.AirspaceByRoute;
    xApiKey?: string;
}
export declare class AspByRouteUsV1AirspaceRouteQueryPostResponse extends SpeakeasyBase {
    /**
     * A list of GeoJSON FeatureCollections, one for each Airspace type requested.
     */
    airspaceRouteResponse?: shared.AirspaceRouteResponse;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
