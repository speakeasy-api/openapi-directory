import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTaskRequest extends SpeakeasyBase {
    /**
     * Task attributes to update
     */
    taskInput: shared.TaskInput;
    /**
     * UUID of task
     */
    id: string;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
