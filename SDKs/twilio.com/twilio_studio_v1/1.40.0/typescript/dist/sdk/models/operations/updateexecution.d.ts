import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class UpdateExecutionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateExecutionUpdateExecutionRequest extends SpeakeasyBase {
    status: shared.ExecutionEnumStatusEnum;
}
export declare class UpdateExecutionRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow with the Execution resources to update.
     */
    flowSid: string;
    requestBody?: UpdateExecutionUpdateExecutionRequest;
    /**
     * The SID of the Execution resource to update.
     */
    sid: string;
}
export declare class UpdateExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV1FlowExecution?: shared.StudioV1FlowExecution;
}
