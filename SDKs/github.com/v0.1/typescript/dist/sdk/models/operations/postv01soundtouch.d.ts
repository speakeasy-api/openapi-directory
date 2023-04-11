import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01SoundTouchSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01SoundTouchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    soundTouchResponse?: shared.SoundTouchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
