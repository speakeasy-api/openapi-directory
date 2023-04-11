import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WxByRouteUsV1WxForecastRouteQueryPostRequest extends SpeakeasyBase {
    wxByRoute: shared.WxByRoute;
    xApiKey?: string;
}
export declare class WxByRouteUsV1WxForecastRouteQueryPostResponse extends SpeakeasyBase {
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
    wxRouteResponse?: shared.WxRouteResponse;
}
