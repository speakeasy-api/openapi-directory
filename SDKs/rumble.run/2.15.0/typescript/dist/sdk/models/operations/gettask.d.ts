import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaskSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetTaskRequest extends SpeakeasyBase {
    /**
     * UUID of the task to retrieve
     */
    taskId: string;
}
export declare class GetTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * task details
     */
    task?: shared.Task;
}
