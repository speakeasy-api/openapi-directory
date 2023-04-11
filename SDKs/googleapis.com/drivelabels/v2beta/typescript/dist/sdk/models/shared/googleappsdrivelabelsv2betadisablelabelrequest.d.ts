import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
/**
 * Request to deprecate a published Label.
 */
export declare class GoogleAppsDriveLabelsV2betaDisableLabelRequest extends SpeakeasyBase {
    /**
     * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
     */
    disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string;
    /**
     * The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
    /**
     * Provides control over how write requests are executed. When not specified, the last write wins.
     */
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
