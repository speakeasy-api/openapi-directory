import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchShiftsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchShiftsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchShiftsResponse?: shared.SearchShiftsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
