import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdEventsRequest extends SpeakeasyBase {
    /**
     * Return the events until and including this date.
     */
    endDate: string;
    /**
     * The unique identifier of the user.
     */
    id: number;
    /**
     * Return the events from and including this date.
     */
    startDate: string;
}
export declare class GetUsersIdEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    events?: shared.Event[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
