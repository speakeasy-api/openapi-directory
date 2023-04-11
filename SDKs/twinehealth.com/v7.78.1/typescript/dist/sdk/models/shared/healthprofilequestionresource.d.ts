import { SpeakeasyBase } from "../../../internal/utils";
export declare class HealthProfileQuestionResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class HealthProfileQuestionResourceRelationshipsAnswerData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class HealthProfileQuestionResourceRelationshipsAnswerLinks extends SpeakeasyBase {
    related?: string;
}
export declare class HealthProfileQuestionResourceRelationshipsAnswer extends SpeakeasyBase {
    data?: HealthProfileQuestionResourceRelationshipsAnswerData;
    links?: HealthProfileQuestionResourceRelationshipsAnswerLinks;
}
export declare class HealthProfileQuestionResourceRelationshipsProfileLinks extends SpeakeasyBase {
    related?: string;
}
export declare class HealthProfileQuestionResourceRelationshipsProfile extends SpeakeasyBase {
    links?: HealthProfileQuestionResourceRelationshipsProfileLinks;
}
export declare class HealthProfileQuestionResourceRelationshipsQuestionDefinitionData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class HealthProfileQuestionResourceRelationshipsQuestionDefinitionLinksLinks extends SpeakeasyBase {
    related?: string;
}
export declare class HealthProfileQuestionResourceRelationshipsQuestionDefinitionLinks extends SpeakeasyBase {
    links?: HealthProfileQuestionResourceRelationshipsQuestionDefinitionLinksLinks;
}
export declare class HealthProfileQuestionResourceRelationshipsQuestionDefinition extends SpeakeasyBase {
    data?: HealthProfileQuestionResourceRelationshipsQuestionDefinitionData;
    links?: HealthProfileQuestionResourceRelationshipsQuestionDefinitionLinks;
}
export declare class HealthProfileQuestionResourceRelationships extends SpeakeasyBase {
    answer?: HealthProfileQuestionResourceRelationshipsAnswer;
    profile?: HealthProfileQuestionResourceRelationshipsProfile;
    questionDefinition?: HealthProfileQuestionResourceRelationshipsQuestionDefinition;
}
export declare class HealthProfileQuestionResource extends SpeakeasyBase {
    /**
     * A health profile question does not have any attribute since it only relates an answer to the corresponding question definition.
     *
     * @remarks
     *
     */
    attributes?: Record<string, any>;
    id: string;
    links?: HealthProfileQuestionResourceLinks;
    relationships?: HealthProfileQuestionResourceRelationships;
    type: string;
}
