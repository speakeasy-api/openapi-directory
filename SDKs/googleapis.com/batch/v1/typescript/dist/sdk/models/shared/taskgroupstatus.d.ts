import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";
export declare class TaskGroupStatus extends SpeakeasyBase {
    counts?: Record<string, string>;
    instances?: InstanceStatus[];
}
