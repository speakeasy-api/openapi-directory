import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2TasksJsonRequestBody extends SpeakeasyBase {
    /**
     * Current state of the task, valid options are: scheduled
     */
    currentState: string;
    /**
     * A description of the task recorded for person at completion time
     */
    description?: string;
    /**
     * Date of when the Task is due, ISO-8601 date format required
     */
    dueDate: string;
    /**
     * Establishes a unique identifier to prevent duplicates from being created
     */
    idempotencyKey?: string;
    /**
     * ID of the person to be contacted
     */
    personId: string;
    /**
     * Datetime of when the user will be reminded of the task, ISO-8601 datetime format required
     */
    remindAt?: string;
    /**
     * Subject line of the task.
     */
    subject: string;
    /**
     * Task type, valid options are: call, email, general
     */
    taskType: string;
    /**
     * ID of the user linked to the task
     */
    userId: number;
}
export declare class PostV2TasksJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
