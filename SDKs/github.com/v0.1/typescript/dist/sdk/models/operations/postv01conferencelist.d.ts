import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceListResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceListResponse?: shared.ConferenceListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
