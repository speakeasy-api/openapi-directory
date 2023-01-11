import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaskStateEnum {
    Pending = "pending",
    Queued = "queued",
    Running = "running",
    Timedout = "timedout",
    Completed = "completed"
}
export declare enum TaskStatusEnum {
    Ok = "ok",
    Warn = "warn",
    Unchanged = "unchanged",
    Error = "error"
}
export declare class Task extends SpeakeasyBase {
    archivedAt?: Date;
    childTaskId?: string;
    completedAt?: Date;
    controllerMessageId?: string;
    createdAt?: Date;
    id?: string;
    input?: Record<string, any>;
    message?: string;
    name?: string;
    output?: Record<string, any>;
    owner?: string;
    sourceId?: string;
    state?: TaskStateEnum;
    status?: TaskStatusEnum;
    targetSourceRef?: string;
    targetType?: string;
    type?: string;
    updatedAt?: Date;
}
export declare class TaskInput extends SpeakeasyBase {
    completedAt?: Date;
    message?: string;
    name?: string;
    output?: Record<string, any>;
    state?: TaskStateEnum;
    status?: TaskStatusEnum;
    targetSourceRef?: string;
    targetType?: string;
    type?: string;
}
