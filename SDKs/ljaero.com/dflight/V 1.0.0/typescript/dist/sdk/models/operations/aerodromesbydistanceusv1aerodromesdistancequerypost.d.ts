import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest extends SpeakeasyBase {
    aerodromesByDistance: shared.AerodromesByDistance;
    xApiKey?: string;
}
export declare class AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse extends SpeakeasyBase {
    /**
     * A GeoJSON FeatureCollection, one Feature for each aerodrome found.
     */
    aerodromeDistanceResponse?: shared.AerodromeDistanceResponse;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
