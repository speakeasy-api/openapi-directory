import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchAvailabilitySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchAvailabilityResponse?: shared.SearchAvailabilityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
