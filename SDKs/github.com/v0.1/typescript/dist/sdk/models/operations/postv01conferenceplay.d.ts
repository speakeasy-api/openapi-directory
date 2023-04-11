import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferencePlaySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferencePlayResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferencePlayResponse?: shared.ConferencePlayResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
