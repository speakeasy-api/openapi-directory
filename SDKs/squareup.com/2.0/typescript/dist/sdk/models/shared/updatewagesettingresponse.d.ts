import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { WageSetting } from "./wagesetting";
/**
 * Represents a response from an update request containing the updated `WageSetting` object
 *
 * @remarks
 * or error messages.
 */
export declare class UpdateWageSettingResponse extends SpeakeasyBase {
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * An object representing a team member's wage information.
     */
    wageSetting?: WageSetting;
}
