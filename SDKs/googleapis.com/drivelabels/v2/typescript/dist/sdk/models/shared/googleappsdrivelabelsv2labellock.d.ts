import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelLockCapabilities } from "./googleappsdrivelabelsv2labellockcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
/**
 * Output only. This LabelLock's state.
 */
export declare enum GoogleAppsDriveLabelsV2LabelLockStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleting = "DELETING"
}
/**
 * A Lock that can be applied to a Label, Field, or Choice.
 */
export declare class GoogleAppsDriveLabelsV2LabelLock extends SpeakeasyBase {
    /**
     * A description of a user's capabilities on a LabelLock.
     */
    capabilities?: GoogleAppsDriveLabelsV2LabelLockCapabilities;
    /**
     * The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present.
     */
    choiceId?: string;
    /**
     * Output only. The time this LabelLock was created.
     */
    createTime?: string;
    /**
     * Information about a user.
     */
    creator?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state.
     */
    deleteTime?: string;
    /**
     * The ID of the Field that should be locked. Empty if the whole Label should be locked.
     */
    fieldId?: string;
    /**
     * Output only. Resource name of this LabelLock.
     */
    name?: string;
    /**
     * Output only. This LabelLock's state.
     */
    state?: GoogleAppsDriveLabelsV2LabelLockStateEnum;
}
