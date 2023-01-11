import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";



export class TaskGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counts" })
  counts?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceStatus })
  instances?: InstanceStatus[];
}
