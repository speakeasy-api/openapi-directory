import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UoaByPolyUsV1UoaPolygonQueryPostRequest extends SpeakeasyBase {
    uoAsByPolygon: shared.UOAsByPolygon;
    xApiKey?: string;
}
export declare class UoaByPolyUsV1UoaPolygonQueryPostResponse extends SpeakeasyBase {
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
    uoAsPolyResponse?: shared.UOAsPolyResponse;
}
