import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchCalendarEventRequest extends SpeakeasyBase {
    /**
     * Calendar event identifier
     */
    id: string;
}
export declare class FetchCalendarEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchCalendarEventResponse?: shared.FetchCalendarEventResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
