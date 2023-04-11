import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VenByPolyUsV1VenuesPolygonQueryPostRequest extends SpeakeasyBase {
    venuesByPolygon: shared.VenuesByPolygon;
    xApiKey?: string;
}
export declare class VenByPolyUsV1VenuesPolygonQueryPostResponse extends SpeakeasyBase {
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
    venuePolyResponse?: shared.VenuePolyResponse;
}
