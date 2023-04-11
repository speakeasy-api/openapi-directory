import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01CancelScheduledPlaySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01CancelScheduledPlayResponse extends SpeakeasyBase {
    /**
     * Response
     */
    cancelScheduledPlayResponse?: shared.CancelScheduledPlayResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
