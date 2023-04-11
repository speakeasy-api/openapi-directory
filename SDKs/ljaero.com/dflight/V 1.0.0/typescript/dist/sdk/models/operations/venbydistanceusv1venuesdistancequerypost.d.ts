import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VenByDistanceUsV1VenuesDistanceQueryPostRequest extends SpeakeasyBase {
    venuesByDistance: shared.VenuesByDistance;
    xApiKey?: string;
}
export declare class VenByDistanceUsV1VenuesDistanceQueryPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A GeoJSON FeatureCollection, one Feature for each venue found.
     */
    venueDistanceResponse?: shared.VenueDistanceResponse;
}
