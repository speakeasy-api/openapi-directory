import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBuildServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBuildRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to fetch the Build resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Build resource to fetch.
     */
    sid: string;
}
export declare class FetchBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceBuild?: shared.ServerlessV1ServiceBuild;
}
