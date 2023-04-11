import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SsaByDistanceUsV1SsaDistanceQueryPostRequest extends SpeakeasyBase {
    ssaByDistance: shared.SSAByDistance;
    xApiKey?: string;
}
export declare class SsaByDistanceUsV1SsaDistanceQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each area found.
     */
    ssaDistanceResponse?: shared.SSADistanceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
