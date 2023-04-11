import { SpeakeasyBase } from "../../../internal/utils";
import { FormSettings } from "./formsettings";
/**
 * Update Form's FormSettings.
 */
export declare class UpdateSettingsRequest extends SpeakeasyBase {
    /**
     * A form's settings.
     */
    settings?: FormSettings;
    /**
     * Required. Only values named in this mask are changed. At least one field must be specified. The root `settings` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
