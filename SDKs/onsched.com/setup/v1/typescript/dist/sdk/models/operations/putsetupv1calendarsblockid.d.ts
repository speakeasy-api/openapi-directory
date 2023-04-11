import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1CalendarsBlockIdRequest extends SpeakeasyBase {
    /**
     * Resource Block input model
     */
    calendarBlockUpdateModel?: shared.CalendarBlockUpdateModel;
    /**
     * id of calendarBlock object
     */
    id: string;
}
export declare class PutSetupV1CalendarsBlockIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calendarBlockViewModel?: shared.CalendarBlockViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
