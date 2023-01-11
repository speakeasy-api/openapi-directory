import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
export declare class Activity extends SpeakeasyBase {
    change?: number;
    changed?: Date;
    changedBy?: ChangedBy;
    field?: string;
    oldValue?: string;
    value?: string;
}
