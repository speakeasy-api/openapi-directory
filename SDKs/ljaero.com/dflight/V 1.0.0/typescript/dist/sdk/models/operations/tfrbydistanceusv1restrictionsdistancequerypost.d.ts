import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest extends SpeakeasyBase {
    notaMsByDistance: shared.NOTAMsByDistance;
    xApiKey?: string;
}
export declare class TfrByDistanceUsV1RestrictionsDistanceQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * A GeoJSON FeatureCollection, one Feature for each restriction.
     */
    notaMsDistanceResponse?: shared.NOTAMsDistanceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
