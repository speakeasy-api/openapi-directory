import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01SendDigitsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01SendDigitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response
     */
    sendDigitsResponse?: shared.SendDigitsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
