import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01CallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01CallResponse extends SpeakeasyBase {
    /**
     * Response
     */
    callResponse?: shared.CallResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
