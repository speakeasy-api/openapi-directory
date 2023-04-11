import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceHangupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceHangupResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceHangupResponse?: shared.ConferenceHangupResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
