import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01HangupCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01HangupCallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    hangupCallResponse?: shared.HangupCallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
