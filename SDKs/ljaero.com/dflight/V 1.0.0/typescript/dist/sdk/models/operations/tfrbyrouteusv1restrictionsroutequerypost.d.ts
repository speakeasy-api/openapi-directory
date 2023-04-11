import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TfrByRouteUsV1RestrictionsRouteQueryPostRequest extends SpeakeasyBase {
    notaMsByRoute: shared.NOTAMsByRoute;
    xApiKey?: string;
}
export declare class TfrByRouteUsV1RestrictionsRouteQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each restriction.
     */
    notaMsRouteResponse?: shared.NOTAMsRouteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
