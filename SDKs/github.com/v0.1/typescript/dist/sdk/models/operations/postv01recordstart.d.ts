import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01RecordStartSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01RecordStartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    recordStartResponse?: shared.RecordStartResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
