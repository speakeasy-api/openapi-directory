import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CalendarsIdBlocksRequest extends SpeakeasyBase {
    /**
     * id of calendar to list blocks
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
}
export declare class GetSetupV1CalendarsIdBlocksResponse extends SpeakeasyBase {
    /**
     * Valid response
     */
    calendarBlockListViewModel?: shared.CalendarBlockListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
