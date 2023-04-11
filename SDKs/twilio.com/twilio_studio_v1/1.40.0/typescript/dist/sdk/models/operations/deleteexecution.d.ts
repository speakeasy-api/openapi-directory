import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class DeleteExecutionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteExecutionRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow with the Execution resources to delete.
     */
    flowSid: string;
    /**
     * The SID of the Execution resource to delete.
     */
    sid: string;
}
export declare class DeleteExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
