import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates how the applied label and field values should be copied when a Drive item is copied.
 */
export declare enum GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum {
    CopyModeUnspecified = "COPY_MODE_UNSPECIFIED",
    DoNotCopy = "DO_NOT_COPY",
    AlwaysCopy = "ALWAYS_COPY",
    CopyAppliable = "COPY_APPLIABLE"
}
/**
 * Behavior of this label when it's applied to Drive items.
 */
export declare class GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy extends SpeakeasyBase {
    /**
     * Indicates how the applied label and field values should be copied when a Drive item is copied.
     */
    copyMode?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum;
}
