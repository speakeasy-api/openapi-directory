import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseInput } from "./release";
/**
 * The request for FirebaseRulesService.UpdateRelease.
 */
export declare class UpdateReleaseRequestInput extends SpeakeasyBase {
    /**
     * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
     */
    release?: ReleaseInput;
    /**
     * Specifies which fields to update.
     */
    updateMask?: string;
}
