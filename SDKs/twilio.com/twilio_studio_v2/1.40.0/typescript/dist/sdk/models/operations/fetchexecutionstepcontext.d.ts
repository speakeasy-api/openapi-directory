import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchExecutionStepContextServerList: readonly ["https://studio.twilio.com"];
export declare class FetchExecutionStepContextSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchExecutionStepContextRequest extends SpeakeasyBase {
    /**
     * The SID of the Execution resource with the Step to fetch.
     */
    executionSid: string;
    /**
     * The SID of the Flow with the Step to fetch.
     */
    flowSid: string;
    /**
     * The SID of the Step to fetch.
     */
    stepSid: string;
}
export declare class FetchExecutionStepContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowExecutionExecutionStepExecutionStepContext?: shared.StudioV2FlowExecutionExecutionStepExecutionStepContext;
}
