import { SpeakeasyBase } from "../../../internal/utils";
import { AllocationPolicy } from "./allocationpolicy";
import { LogsPolicy } from "./logspolicy";
import { JobNotification } from "./jobnotification";
import { JobStatus } from "./jobstatus";
import { TaskGroup } from "./taskgroup";
import { TaskGroupInput } from "./taskgroup";
/**
 * The Cloud Batch Job description.
**/
export declare class Job extends SpeakeasyBase {
    allocationPolicy?: AllocationPolicy;
    createTime?: string;
    labels?: Record<string, string>;
    logsPolicy?: LogsPolicy;
    name?: string;
    notifications?: JobNotification[];
    priority?: string;
    status?: JobStatus;
    taskGroups?: TaskGroup[];
    uid?: string;
    updateTime?: string;
}
/**
 * The Cloud Batch Job description.
**/
export declare class JobInput extends SpeakeasyBase {
    allocationPolicy?: AllocationPolicy;
    labels?: Record<string, string>;
    logsPolicy?: LogsPolicy;
    notifications?: JobNotification[];
    priority?: string;
    status?: JobStatus;
    taskGroups?: TaskGroupInput[];
}
