import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { RecurrenceEnum } from "./recurrenceenum";
import { TargetSimple } from "./targetsimple";
/**
 * Scheduled scan object
 */
export declare class Scheduled extends SpeakeasyBase {
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Date time of next scan
     */
    dateTime?: Date;
    /**
     * Scheduled object id
     */
    id?: string;
    /**
     * Scan recurrence:
     *
     * @remarks
     *   * d - daily
     *   * w - weekly
     *   * m - monthly
     *   * q - quarterly
     *   * '' - no recurrence
     *
     */
    recurrence?: RecurrenceEnum;
    target?: TargetSimple;
}
