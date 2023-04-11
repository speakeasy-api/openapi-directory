import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01SchedulePlaySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01SchedulePlayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    schedulePlayResponse?: shared.SchedulePlayResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
