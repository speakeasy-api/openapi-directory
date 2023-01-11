import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllocationPolicy } from "./allocationpolicy";
import { LogsPolicy } from "./logspolicy";
import { JobNotification } from "./jobnotification";
import { JobStatus } from "./jobstatus";
import { TaskGroup } from "./taskgroup";
import { TaskGroupInput } from "./taskgroup";



// Job
/** 
 * The Cloud Batch Job description.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocationPolicy" })
  allocationPolicy?: AllocationPolicy;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logsPolicy" })
  logsPolicy?: LogsPolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: JobNotification })
  notifications?: JobNotification[];

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatus;

  @SpeakeasyMetadata({ data: "json, name=taskGroups", elemType: TaskGroup })
  taskGroups?: TaskGroup[];

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// JobInput
/** 
 * The Cloud Batch Job description.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocationPolicy" })
  allocationPolicy?: AllocationPolicy;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logsPolicy" })
  logsPolicy?: LogsPolicy;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: JobNotification })
  notifications?: JobNotification[];

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatus;

  @SpeakeasyMetadata({ data: "json, name=taskGroups", elemType: TaskGroupInput })
  taskGroups?: TaskGroupInput[];
}
