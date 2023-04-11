import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
    /**
     * id of a calendarBlock object
     */
    id: string;
}
export declare class DeleteSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calendarBlockViewModel?: shared.CalendarBlockViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
