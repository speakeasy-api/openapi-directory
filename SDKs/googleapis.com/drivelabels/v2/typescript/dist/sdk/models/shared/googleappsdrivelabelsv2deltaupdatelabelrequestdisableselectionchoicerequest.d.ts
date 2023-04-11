import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LifecycleDisabledPolicy } from "./googleappsdrivelabelsv2lifecycledisabledpolicy";
/**
 * Request to disable a Choice.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest extends SpeakeasyBase {
    /**
     * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
     */
    disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
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
