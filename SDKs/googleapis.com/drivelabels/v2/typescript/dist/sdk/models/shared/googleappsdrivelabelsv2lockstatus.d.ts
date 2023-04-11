import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about whether a label component should be considered locked.
 */
export declare class GoogleAppsDriveLabelsV2LockStatus extends SpeakeasyBase {
    /**
     * Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false.
     */
    locked?: boolean;
}
