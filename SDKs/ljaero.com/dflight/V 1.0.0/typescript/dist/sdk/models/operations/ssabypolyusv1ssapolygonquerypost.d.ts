import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SsaByPolyUsV1SsaPolygonQueryPostRequest extends SpeakeasyBase {
    ssaByPolygon: shared.SSAByPolygon;
    xApiKey?: string;
}
export declare class SsaByPolyUsV1SsaPolygonQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each area found.
     */
    ssaPolyResponse?: shared.SSAPolyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
