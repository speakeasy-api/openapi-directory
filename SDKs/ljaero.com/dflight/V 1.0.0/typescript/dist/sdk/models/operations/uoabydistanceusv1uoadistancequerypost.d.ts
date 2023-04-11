import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UoaByDistanceUsV1UoaDistanceQueryPostRequest extends SpeakeasyBase {
    uoAsByDistance: shared.UOAsByDistance;
    xApiKey?: string;
}
export declare class UoaByDistanceUsV1UoaDistanceQueryPostResponse extends SpeakeasyBase {
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
    uoAsDistanceResponse?: shared.UOAsDistanceResponse;
}
