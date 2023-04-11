import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
/**
 * Type of change:
 *
 * @remarks
 *   * created - First time the issue is found
 *   * comment - User left a comment in the timeline
 *   * found - Found again in a later scan
 *   * changed - One of the parameters of the finding was changed
 *    (e.g. severity)
 *
 */
export declare enum ActivityChangeEnum {
    Created = "created",
    Comment = "comment",
    Found = "found",
    Changed = "changed"
}
export declare class Activity extends SpeakeasyBase {
    /**
     * Type of change:
     *
     * @remarks
     *   * created - First time the issue is found
     *   * comment - User left a comment in the timeline
     *   * found - Found again in a later scan
     *   * changed - One of the parameters of the finding was changed
     *    (e.g. severity)
     *
     */
    change?: ActivityChangeEnum;
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Field that was changed
     */
    field?: string;
    /**
     * Previous value
     */
    oldValue?: string;
    /**
     * New value
     */
    value?: string;
}
