import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING"
}


// ResourceStatus
/** 
 * Message describing resource status
**/
export class ResourceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rulesNewerVersions" })
  rulesNewerVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ResourceStatusStateEnum;
}
