import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { TestSuite } from "./testsuite";
/**
 * The request for FirebaseRulesService.TestRuleset.
 */
export declare class TestRulesetRequest extends SpeakeasyBase {
    /**
     * `Source` is one or more `File` messages comprising a logical set of rules.
     */
    source?: Source;
    /**
     * `TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.
     */
    testSuite?: TestSuite;
}
