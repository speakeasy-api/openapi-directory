import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRule } from "./googlecloudcontactcenterinsightsv1phrasematchrule";
/**
 * Required. The type of this phrase match rule group.
 */
export declare enum GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum {
    PhraseMatchRuleGroupTypeUnspecified = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED",
    AllOf = "ALL_OF",
    AnyOf = "ANY_OF"
}
/**
 * A message representing a rule in the phrase matcher.
 */
export declare class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup extends SpeakeasyBase {
    /**
     * A list of phase match rules that are included in this group.
     */
    phraseMatchRules?: GoogleCloudContactcenterinsightsV1PhraseMatchRule[];
    /**
     * Required. The type of this phrase match rule group.
     */
    type?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum;
}
