import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig } from "./googlecloudcontactcenterinsightsv1phrasematchruleconfig";
/**
 * The data for a phrase match rule.
 */
export declare class GoogleCloudContactcenterinsightsV1PhraseMatchRule extends SpeakeasyBase {
    /**
     * Configuration information of a phrase match rule.
     */
    config?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;
    /**
     * Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment.
     */
    negated?: boolean;
    /**
     * Required. The phrase to be matched.
     */
    query?: string;
}
