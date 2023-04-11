import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
/**
 * Request to disable a Choice.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest extends SpeakeasyBase {
    /**
     * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
     */
    disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
    /**
     * Required. The Selection Field in which a Choice will be disabled.
     */
    fieldId?: string;
    /**
     * Required. Choice to disable.
     */
    id?: string;
    /**
     * The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
