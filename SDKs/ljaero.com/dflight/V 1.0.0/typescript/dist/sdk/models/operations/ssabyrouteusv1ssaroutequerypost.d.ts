import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SsaByRouteUsV1SsaRouteQueryPostRequest extends SpeakeasyBase {
    ssaByRoute: shared.SSAByRoute;
    xApiKey?: string;
}
export declare class SsaByRouteUsV1SsaRouteQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each area found.
     */
    ssaRouteResponse?: shared.SSARouteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
