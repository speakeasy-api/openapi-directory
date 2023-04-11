import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchExecutionContextServerList: readonly ["https://studio.twilio.com"];
export declare class FetchExecutionContextSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchExecutionContextRequest extends SpeakeasyBase {
    /**
     * The SID of the Execution context to fetch.
     */
    executionSid: string;
    /**
     * The SID of the Flow with the Execution context to fetch.
     */
    flowSid: string;
}
export declare class FetchExecutionContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV1FlowExecutionExecutionContext?: shared.StudioV1FlowExecutionExecutionContext;
}
