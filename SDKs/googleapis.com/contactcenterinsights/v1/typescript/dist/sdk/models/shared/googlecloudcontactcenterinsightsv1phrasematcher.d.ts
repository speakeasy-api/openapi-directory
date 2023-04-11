import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup } from "./googlecloudcontactcenterinsightsv1phrasematchrulegroup";
/**
 * The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.
 */
export declare enum GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER",
    AnyAgent = "ANY_AGENT"
}
/**
 * Required. The type of this phrase matcher.
 */
export declare enum GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum {
    PhraseMatcherTypeUnspecified = "PHRASE_MATCHER_TYPE_UNSPECIFIED",
    AllOf = "ALL_OF",
    AnyOf = "ANY_OF"
}
/**
 * The phrase matcher resource.
 */
export declare class GoogleCloudContactcenterinsightsV1PhraseMatcher extends SpeakeasyBase {
    /**
     * Output only. The most recent time at which the activation status was updated.
     */
    activationUpdateTime?: string;
    /**
     * Applies the phrase matcher only when it is active.
     */
    active?: boolean;
    /**
     * The human-readable name of the phrase matcher.
     */
    displayName?: string;
    /**
     * The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
     */
    name?: string;
    /**
     * A list of phase match rule groups that are included in this matcher.
     */
    phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];
    /**
     * Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.
     */
    revisionCreateTime?: string;
    /**
     * Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567
     */
    revisionId?: string;
    /**
     * The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.
     */
    roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
    /**
     * Required. The type of this phrase matcher.
     */
    type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
    /**
     * Output only. The most recent time at which the phrase matcher was updated.
     */
    updateTime?: string;
    /**
     * The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.
     */
    versionTag?: string;
}
/**
 * The phrase matcher resource.
 */
export declare class GoogleCloudContactcenterinsightsV1PhraseMatcherInput extends SpeakeasyBase {
    /**
     * Applies the phrase matcher only when it is active.
     */
    active?: boolean;
    /**
     * The human-readable name of the phrase matcher.
     */
    displayName?: string;
    /**
     * The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
     */
    name?: string;
    /**
     * A list of phase match rule groups that are included in this matcher.
     */
    phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[];
    /**
     * The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.
     */
    roleMatch?: GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
    /**
     * Required. The type of this phrase matcher.
     */
    type?: GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
    /**
     * The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.
     */
    versionTag?: string;
}
