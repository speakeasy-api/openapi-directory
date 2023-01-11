import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { RecurrenceEnum } from "./recurrenceenum";
import { TargetSimple } from "./targetsimple";
export declare class Scheduled extends SpeakeasyBase {
    changed?: Date;
    changedBy?: ChangedBy;
    dateTime?: Date;
    id?: string;
    recurrence?: RecurrenceEnum;
    target?: TargetSimple;
}
