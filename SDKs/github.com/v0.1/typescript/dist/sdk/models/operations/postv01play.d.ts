import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01PlaySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01PlayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    playResponse?: shared.PlayResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
