import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AerodromesByRouteUsV1AerodromesRouteQueryPostRequest extends SpeakeasyBase {
    aerodromesByRoute: shared.AerodromesByRoute;
    xApiKey?: string;
}
export declare class AerodromesByRouteUsV1AerodromesRouteQueryPostResponse extends SpeakeasyBase {
    /**
     * A GeoJSON FeatureCollection, one Feature for each aerodrome found.
     */
    aerodromeRouteResponse?: shared.AerodromeRouteResponse;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
