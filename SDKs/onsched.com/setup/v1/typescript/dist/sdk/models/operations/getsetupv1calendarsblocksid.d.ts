import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CalendarsBlocksIdRequest extends SpeakeasyBase {
    /**
     * id of calendarBlock object
     */
    id: string;
}
export declare class GetSetupV1CalendarsBlocksIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calendarBlockViewModel?: shared.CalendarBlockViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
