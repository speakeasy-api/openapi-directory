import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities related to this field on applied metadata.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities extends SpeakeasyBase {
    /**
     * Whether the user can read related applied metadata on items.
     */
    canRead?: boolean;
    /**
     * Whether the user can search for Drive items referencing this field.
     */
    canSearch?: boolean;
    /**
     * Whether the user can set this field on Drive items.
     */
    canWrite?: boolean;
}
