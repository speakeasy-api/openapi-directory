import { SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { FindingSeverityEnum } from "./findingseverityenum";
import { FindingStateEnum } from "./findingstateenum";
export declare class FindingUpdateInput extends SpeakeasyBase {
    assignee?: Assignee;
    comment?: string;
    labels?: string[];
    severity?: FindingSeverityEnum;
    state?: FindingStateEnum;
}
