import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceKickSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceKickResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceKickResponse?: shared.ConferenceKickResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
