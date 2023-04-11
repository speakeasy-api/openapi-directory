import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01BulkCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01BulkCallResponse extends SpeakeasyBase {
    /**
     * Response
     */
    bulkCallResponse?: shared.BulkCallResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
