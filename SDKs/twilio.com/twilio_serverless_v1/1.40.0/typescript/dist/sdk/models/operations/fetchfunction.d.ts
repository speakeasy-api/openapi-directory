import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchFunctionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFunctionRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to fetch the Function resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Function resource to fetch.
     */
    sid: string;
}
export declare class FetchFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
