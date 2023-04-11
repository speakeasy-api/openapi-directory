import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01GroupCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01GroupCallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    groupCallResponse?: shared.GroupCallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
