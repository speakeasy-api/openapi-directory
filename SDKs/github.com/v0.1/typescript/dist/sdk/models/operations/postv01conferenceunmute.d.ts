import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceUnmuteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceUnmuteResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceUnmuteResponse?: shared.ConferenceUnmuteResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
