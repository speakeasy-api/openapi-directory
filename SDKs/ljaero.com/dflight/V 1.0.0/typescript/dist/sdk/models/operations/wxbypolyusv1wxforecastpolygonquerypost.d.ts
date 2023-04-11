import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WxByPolyUsV1WxForecastPolygonQueryPostRequest extends SpeakeasyBase {
    wxByPolygon: shared.WxByPolygon;
    xApiKey?: string;
}
export declare class WxByPolyUsV1WxForecastPolygonQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A GeoJSON FeatureCollection with one Feature for each forecast location found within requested area.
     */
    wxPolyResponse?: shared.WxPolyResponse;
}
