import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01SoundTouchStopSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01SoundTouchStopResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    soundTouchStopResponse?: shared.SoundTouchStopResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
