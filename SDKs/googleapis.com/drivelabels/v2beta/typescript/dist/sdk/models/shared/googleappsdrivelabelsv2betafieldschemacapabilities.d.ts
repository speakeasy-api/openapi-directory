import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities related to this field when editing the field.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities extends SpeakeasyBase {
    /**
     * Whether the user can delete this field. The user must have permission and the field must be deprecated.
     */
    canDelete?: boolean;
    /**
     * Whether the user can disable this field. The user must have permission and this field must not already be disabled.
     */
    canDisable?: boolean;
    /**
     * Whether the user can enable this field. The user must have permission and this field must be disabled.
     */
    canEnable?: boolean;
    /**
     * Whether the user can change this field.
     */
    canUpdate?: boolean;
}
