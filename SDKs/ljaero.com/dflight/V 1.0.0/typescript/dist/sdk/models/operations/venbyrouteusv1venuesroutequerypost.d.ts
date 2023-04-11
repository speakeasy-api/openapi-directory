import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VenByRouteUsV1VenuesRouteQueryPostRequest extends SpeakeasyBase {
    venuesByRoute: shared.VenuesByRoute;
    xApiKey?: string;
}
export declare class VenByRouteUsV1VenuesRouteQueryPostResponse extends SpeakeasyBase {
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
    venueRouteResponse?: shared.VenueRouteResponse;
}
