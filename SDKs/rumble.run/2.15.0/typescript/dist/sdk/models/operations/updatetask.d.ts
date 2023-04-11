import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    /**
     * task object
     */
    task: shared.Task;
    /**
     * UUID of the task to update
     */
    taskId: string;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * task details
     */
    task?: shared.Task;
}
