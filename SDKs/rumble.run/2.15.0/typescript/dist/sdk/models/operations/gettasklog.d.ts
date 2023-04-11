import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTaskLogSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetTaskLogRequest extends SpeakeasyBase {
    /**
     * UUID of the task
     */
    taskId: string;
}
export declare class GetTaskLogResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
