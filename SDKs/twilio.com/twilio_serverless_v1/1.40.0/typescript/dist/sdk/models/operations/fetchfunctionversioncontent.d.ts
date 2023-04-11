import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFunctionVersionContentServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchFunctionVersionContentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFunctionVersionContentRequest extends SpeakeasyBase {
    /**
     * The SID of the Function that is the parent of the Function Version content to fetch.
     */
    functionSid: string;
    /**
     * The SID of the Service to fetch the Function Version content from.
     */
    serviceSid: string;
    /**
     * The SID of the Function Version content to fetch.
     */
    sid: string;
}
export declare class FetchFunctionVersionContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent?: shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent;
}
