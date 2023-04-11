import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01TransferCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01TransferCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    transferCallResponse?: shared.TransferCallResponse;
}
