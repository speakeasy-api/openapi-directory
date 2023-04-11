import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceSpeakSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceSpeakResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceSpeakResponse?: shared.ConferenceSpeakResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
