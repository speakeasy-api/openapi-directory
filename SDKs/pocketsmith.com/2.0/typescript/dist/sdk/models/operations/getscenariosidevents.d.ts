import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScenariosIdEventsRequest extends SpeakeasyBase {
    /**
     * Return the events until and including this date.
     */
    endDate: string;
    /**
     * The unique identifier of the scenario.
     */
    id: number;
    /**
     * Return the events from and including this date.
     */
    startDate: string;
}
export declare class GetScenariosIdEventsResponse extends SpeakeasyBase {
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
