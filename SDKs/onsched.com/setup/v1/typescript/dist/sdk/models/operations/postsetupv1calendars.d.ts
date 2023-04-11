import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1CalendarsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
