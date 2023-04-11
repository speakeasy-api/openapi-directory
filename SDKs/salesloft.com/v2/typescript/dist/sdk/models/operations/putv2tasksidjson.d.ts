import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2TasksIdJsonRequestBody extends SpeakeasyBase {
    /**
     * Current state of the task, valid options are: completed
     */
    currentState?: string;
    /**
     * A description of the task recorded for person at completion time
     */
    description?: string;
    /**
     * Date of when the Task is due, ISO-8601 date format required
     */
    dueDate?: string;
    /**
     * A flag to indicate that the task should only be logged
     */
    isLogged?: boolean;
    /**
     * Datetime of when the user will be reminded of the task, ISO-8601 datetime format required
     */
    remindAt?: string;
    /**
     * Subject line of the task
     */
    subject?: string;
}
export declare class PutV2TasksIdJsonRequest extends SpeakeasyBase {
    requestBody?: PutV2TasksIdJsonRequestBody;
    /**
     * Task ID
     */
    id: string;
}
export declare class PutV2TasksIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
