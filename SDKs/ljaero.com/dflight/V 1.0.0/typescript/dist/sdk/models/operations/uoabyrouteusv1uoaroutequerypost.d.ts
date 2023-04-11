import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UoaByRouteUsV1UoaRouteQueryPostRequest extends SpeakeasyBase {
    uoAsByRoute: shared.UOAsByRoute;
    xApiKey?: string;
}
export declare class UoaByRouteUsV1UoaRouteQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A GeoJSON FeatureCollection, one Feature for each UOA.
     */
    uoAsRouteResponse?: shared.UOAsRouteResponse;
}
