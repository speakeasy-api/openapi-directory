import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllFacilitiesSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare enum GetAllFacilitiesAcceptEnum {
    ApplicationGeoPlusJson = "application/geo+json",
    ApplicationVndGeoPlusJson = "application/vnd.geo+json",
    TextCsv = "text/csv"
}
export declare class GetAllFacilitiesRequest extends SpeakeasyBase {
    accept: GetAllFacilitiesAcceptEnum;
}
export declare class GetAllFacilitiesResponse extends SpeakeasyBase {
    /**
     * Requested format unacceptable
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Missing API token
     */
    genericError?: shared.GenericError;
    /**
     * Success
     */
    geoFacilitiesResponse?: shared.GeoFacilitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getAllFacilities200TextCsvString?: string;
}
