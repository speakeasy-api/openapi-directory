import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest extends SpeakeasyBase {
    aerodromesByPolygon: shared.AerodromesByPolygon;
    xApiKey?: string;
}
export declare class AerodromesByPolyUsV1AerodromesPolygonQueryPostResponse extends SpeakeasyBase {
    /**
     * A GeoJSON FeatureCollection, one Feature for each aerodrome found.
     */
    aerodromePolyResponse?: shared.AerodromePolyResponse;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
