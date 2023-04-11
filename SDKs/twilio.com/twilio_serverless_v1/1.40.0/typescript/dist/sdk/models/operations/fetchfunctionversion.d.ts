import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFunctionVersionServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchFunctionVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFunctionVersionRequest extends SpeakeasyBase {
    /**
     * The SID of the function that is the parent of the Function Version resource to fetch.
     */
    functionSid: string;
    /**
     * The SID of the Service to fetch the Function Version resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Function Version resource to fetch.
     */
    sid: string;
}
export declare class FetchFunctionVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceFunctionFunctionVersion?: shared.ServerlessV1ServiceFunctionFunctionVersion;
}
