import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchExecutionStepServerList: readonly ["https://studio.twilio.com"];
export declare class FetchExecutionStepSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchExecutionStepRequest extends SpeakeasyBase {
    /**
     * The SID of the Execution resource with the Step to fetch.
     */
    executionSid: string;
    /**
     * The SID of the Flow with the Step to fetch.
     */
    flowSid: string;
    /**
     * The SID of the ExecutionStep resource to fetch.
     */
    sid: string;
}
export declare class FetchExecutionStepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowExecutionExecutionStep?: shared.StudioV2FlowExecutionExecutionStep;
}
