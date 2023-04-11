import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
 */
export declare class ReleaseInput extends SpeakeasyBase {
    /**
     * Required. Format: `projects/{project_id}/releases/{release_id}`
     */
    name?: string;
    /**
     * Required. Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.
     */
    rulesetName?: string;
}
/**
 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
 */
export declare class Release extends SpeakeasyBase {
    /**
     * Output only. Time the release was created.
     */
    createTime?: string;
    /**
     * Required. Format: `projects/{project_id}/releases/{release_id}`
     */
    name?: string;
    /**
     * Required. Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.
     */
    rulesetName?: string;
    /**
     * Output only. Time the release was updated.
     */
    updateTime?: string;
}
