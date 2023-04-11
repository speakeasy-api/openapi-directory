import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ScheduleHangupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ScheduleHangupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    scheduleHangupResponse?: shared.ScheduleHangupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
