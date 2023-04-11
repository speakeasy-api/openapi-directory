import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceRequest extends SpeakeasyBase {
    /**
     * The `sid` or `unique_name` of the Service resource to fetch.
     */
    sid: string;
}
export declare class FetchServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1Service?: shared.ServerlessV1Service;
}
