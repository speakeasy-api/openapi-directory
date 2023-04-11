import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01CancelScheduledHangupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01CancelScheduledHangupResponse extends SpeakeasyBase {
    /**
     * Response
     */
    cancelScheduledHangupResponse?: shared.CancelScheduledHangupResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
