import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities a user has on this label's applied metadata.
 */
export declare class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities extends SpeakeasyBase {
    /**
     * Whether the user can apply this label to items.
     */
    canApply?: boolean;
    /**
     * Whether the user can read applied metadata related to this label.
     */
    canRead?: boolean;
    /**
     * Whether the user can remove this label from items.
     */
    canRemove?: boolean;
}
