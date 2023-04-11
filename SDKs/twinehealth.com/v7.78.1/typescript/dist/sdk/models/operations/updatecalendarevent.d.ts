import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCalendarEventRequest extends SpeakeasyBase {
    updateCalendarEventRequest: shared.UpdateCalendarEventRequest;
    /**
     * Calendar event identifier
     */
    id: string;
}
export declare class UpdateCalendarEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid Request
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateCalendarEventResponse?: shared.UpdateCalendarEventResponse;
}
