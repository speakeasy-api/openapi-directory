import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities related to this label when editing the label.
 */
export declare class GoogleAppsDriveLabelsV2LabelSchemaCapabilities extends SpeakeasyBase {
    /**
     * Whether the user can delete this label. The user must have permission and the label must be disabled.
     */
    canDelete?: boolean;
    /**
     * Whether the user can disable this label. The user must have permission and this label must not already be disabled.
     */
    canDisable?: boolean;
    /**
     * Whether the user can enable this label. The user must have permission and this label must be disabled.
     */
    canEnable?: boolean;
    /**
     * Whether the user can change this label.
     */
    canUpdate?: boolean;
}
