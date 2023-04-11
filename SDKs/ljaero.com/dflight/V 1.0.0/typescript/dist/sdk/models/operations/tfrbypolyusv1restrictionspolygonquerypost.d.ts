import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TfrByPolyUsV1RestrictionsPolygonQueryPostRequest extends SpeakeasyBase {
    notaMsByPolygon: shared.NOTAMsByPolygon;
    xApiKey?: string;
}
export declare class TfrByPolyUsV1RestrictionsPolygonQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each restriction.
     */
    notaMsPolyResponse?: shared.NOTAMsPolyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
