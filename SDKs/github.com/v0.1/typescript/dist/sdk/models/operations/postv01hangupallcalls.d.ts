import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01HangupAllCallsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    hangupAllCallsResponse?: shared.HangupAllCallsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
