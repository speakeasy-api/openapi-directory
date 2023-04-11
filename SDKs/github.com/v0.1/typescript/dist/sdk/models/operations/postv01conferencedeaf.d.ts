import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceDeafSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceDeafResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceDeafResponse?: shared.ConferenceDeafResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
