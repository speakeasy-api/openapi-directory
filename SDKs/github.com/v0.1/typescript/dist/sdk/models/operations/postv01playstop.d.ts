import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01PlayStopSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01PlayStopResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    playStopResponse?: shared.PlayStopResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
