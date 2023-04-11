import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { WageSetting } from "./wagesetting";
/**
 * Represents a response from a retrieve request containing the specified `WageSetting` object or error messages.
 */
export declare class RetrieveWageSettingResponse extends SpeakeasyBase {
    /**
     * The errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * An object representing a team member's wage information.
     */
    wageSetting?: WageSetting;
}
