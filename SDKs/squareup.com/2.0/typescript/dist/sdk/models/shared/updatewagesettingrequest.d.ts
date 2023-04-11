import { SpeakeasyBase } from "../../../internal/utils";
import { WageSetting } from "./wagesetting";
/**
 * Represents an update request for the `WageSetting` object describing a `TeamMember`.
 */
export declare class UpdateWageSettingRequest extends SpeakeasyBase {
    /**
     * An object representing a team member's wage information.
     */
    wageSetting: WageSetting;
}
