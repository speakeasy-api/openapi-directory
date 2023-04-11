import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopTaskSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class StopTaskRequest extends SpeakeasyBase {
    /**
     * UUID of the task to stop
     */
    taskId: string;
}
export declare class StopTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
