import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFacilityByIdSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetFacilityByIdRequest extends SpeakeasyBase {
    /**
     * Facility ID, in the form `<prefix>_<station>`, where prefix is one of "vha", "vba", "nca", or "vc", for health facility, benefits, cemetery, or vet center, respectively.
     */
    id: string;
}
export declare class GetFacilityByIdResponse extends SpeakeasyBase {
    /**
     * Bad request - invalid or missing query parameters
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Success
     */
    facilityReadResponse?: shared.FacilityReadResponse;
    /**
     * Missing API token
     */
    genericError?: shared.GenericError;
    /**
     * Success
     */
    geoFacilityReadResponse?: shared.GeoFacilityReadResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
