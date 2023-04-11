import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WxByDistanceUsV1WxForecastDistanceQueryPostRequest extends SpeakeasyBase {
    wxByDistance: shared.WxByDistance;
    xApiKey?: string;
}
export declare class WxByDistanceUsV1WxForecastDistanceQueryPostResponse extends SpeakeasyBase {
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
    wxDistanceResponse?: shared.WxDistanceResponse;
}
