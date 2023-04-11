import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HealthProfileResourceAttributesStatsCategoryEnum {
    LifestyleBehaviors = "lifestyle_behaviors",
    MentalWellbeing = "mental_wellbeing",
    PreventativeCare = "preventative_care",
    Overall = "overall"
}
/**
 * The category, answered and total counts for questions in the health profile
 */
export declare class HealthProfileResourceAttributesStats extends SpeakeasyBase {
    answered?: number;
    category?: HealthProfileResourceAttributesStatsCategoryEnum;
    total?: number;
}
export declare class HealthProfileResourceAttributes extends SpeakeasyBase {
    /**
     * List of category, answered and total counts for questions in the health profile
     */
    stats?: HealthProfileResourceAttributesStats[];
}
export declare class HealthProfileResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class HealthProfileResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class HealthProfileResourceRelationshipsPatientLinks extends SpeakeasyBase {
    related?: string;
}
export declare class HealthProfileResourceRelationshipsPatient extends SpeakeasyBase {
    data?: HealthProfileResourceRelationshipsPatientData;
    links?: HealthProfileResourceRelationshipsPatientLinks;
}
export declare class HealthProfileResourceRelationshipsQuestionsData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class HealthProfileResourceRelationshipsQuestionsLinks extends SpeakeasyBase {
    related?: string;
}
export declare class HealthProfileResourceRelationshipsQuestions extends SpeakeasyBase {
    data?: HealthProfileResourceRelationshipsQuestionsData[];
    links?: HealthProfileResourceRelationshipsQuestionsLinks;
}
export declare class HealthProfileResourceRelationships extends SpeakeasyBase {
    patient?: HealthProfileResourceRelationshipsPatient;
    questions?: HealthProfileResourceRelationshipsQuestions;
}
export declare class HealthProfileResource extends SpeakeasyBase {
    attributes?: HealthProfileResourceAttributes;
    id?: string;
    links?: HealthProfileResourceLinks;
    relationships?: HealthProfileResourceRelationships;
    type: string;
}
