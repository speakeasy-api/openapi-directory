import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceRecordStopSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceRecordStopResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceRecordStopResponse?: shared.ConferenceRecordStopResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
