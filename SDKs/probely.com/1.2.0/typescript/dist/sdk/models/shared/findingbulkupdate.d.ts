import { SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { FindingSeverityEnum } from "./findingseverityenum";
import { FindingStateEnum } from "./findingstateenum";
export declare class FindingBulkUpdateInput extends SpeakeasyBase {
    assignee?: Assignee;
    comment?: string;
    ids: string[];
    labels?: string[];
    severity?: FindingSeverityEnum;
    state?: FindingStateEnum;
}
