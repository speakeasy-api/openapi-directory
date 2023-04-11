import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CalendarsIdRequest extends SpeakeasyBase {
    /**
     * id of calendar object
     */
    id: string;
}
export declare class GetSetupV1CalendarsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
