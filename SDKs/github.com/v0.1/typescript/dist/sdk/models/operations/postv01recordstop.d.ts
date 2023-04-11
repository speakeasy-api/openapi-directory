import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01RecordStopSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01RecordStopResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    recordStopResponse?: shared.RecordStopResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
