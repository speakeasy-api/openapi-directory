import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { FindingSeverityEnum } from "./findingseverityenum";
import { FindingStateEnum } from "./findingstateenum";



export class FindingUpdateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: Assignee;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FindingStateEnum;
}
