import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Task extends SpeakeasyBase {
    /**
     * Datetime of when the task was completed, ISO-8601 datetime format required
     */
    completedAt?: Date;
    completedBy?: EmbeddedResource;
    /**
     * Datetime of when the Task was created
     */
    createdAt?: Date;
    createdByUser?: EmbeddedResource;
    /**
     * The state of the task. Valid states are: scheduled, completed
     */
    currentState?: string;
    /**
     * A description of the task recorded for person at completion time
     */
    description?: string;
    /**
     * Datetime of when the Task is due, can be null.  ISO-8601 datetime format required
     */
    dueAt?: Date;
    /**
     * Date of when the Task is due, ISO-8601 date format required
     */
    dueDate?: Date;
    /**
     * ID of Task
     */
    id?: number;
    person?: EmbeddedResource;
    /**
     * Datetime of when the user will be reminded of the task, ISO-8601 datetime format required
     */
    remindAt?: Date;
    /**
     * Subject line of the task
     */
    subject?: string;
    /**
     * The type of the task.  Valid types are: call, email, general
     */
    taskType?: string;
    /**
     * Datetime of when the Task was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
