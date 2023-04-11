import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class FetchExecutionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchExecutionRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow with the Execution resource to fetch
     */
    flowSid: string;
    /**
     * The SID of the Execution resource to fetch.
     */
    sid: string;
}
export declare class FetchExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowExecution?: shared.StudioV2FlowExecution;
}
