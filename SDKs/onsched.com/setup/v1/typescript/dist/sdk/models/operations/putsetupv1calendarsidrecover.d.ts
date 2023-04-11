import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1CalendarsIdRecoverRequest extends SpeakeasyBase {
    /**
     * id of calendar object
     */
    id: string;
}
export declare class PutSetupV1CalendarsIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduleViewModel?: shared.ScheduleViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
