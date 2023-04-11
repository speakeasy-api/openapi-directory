import { SpeakeasyBase } from "../../../internal/utils";
import { Ruleset } from "./ruleset";
/**
 * The response for FirebaseRulesService.ListRulesets.
 */
export declare class ListRulesetsResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
     */
    nextPageToken?: string;
    /**
     * List of `Ruleset` instances.
     */
    rulesets?: Ruleset[];
}
