import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceRecordStartSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceRecordStartResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceRecordStartResponse?: shared.ConferenceRecordStartResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
