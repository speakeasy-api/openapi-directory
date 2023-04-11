import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1CalendarsIdBlockRequest extends SpeakeasyBase {
    calendarBlockInputModel?: shared.CalendarBlockInputModel;
    /**
     * id of calendar object
     */
    id: string;
}
export declare class PostSetupV1CalendarsIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
