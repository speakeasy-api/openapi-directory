import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1CalendarsIdRequest extends SpeakeasyBase {
    /**
     * Input model for the calendar object
     */
    scheduleUpdateModel?: shared.ScheduleUpdateModel;
    /**
     * id of calendar object
     */
    id: string;
}
export declare class PutSetupV1CalendarsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
