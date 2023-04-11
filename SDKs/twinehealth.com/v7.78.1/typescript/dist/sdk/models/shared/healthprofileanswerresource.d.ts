import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details of a previous answer for a health profile question
 */
export declare class HealthProfileAnswerResourceAttributesHistory extends SpeakeasyBase {
    /**
     * The id of the patient or coach who answered the health profile question
     */
    createdBy?: string;
    /**
     * The date when the health profile question is answered
     */
    answeredAt?: string;
    /**
     * The value of the answer entered for the health profile question
     */
    value?: string;
}
/**
 * The details of the latest answer for a health profile question
 */
export declare class HealthProfileAnswerResourceAttributesLatest extends SpeakeasyBase {
    /**
     * The id of the patient or coach who answered the health profile question
     */
    createdBy?: string;
    /**
     * The date when the health profile question is answered
     */
    answeredAt?: string;
    /**
     * The value of the answer entered for the health profile question
     */
    value?: string;
}
export declare class HealthProfileAnswerResourceAttributes extends SpeakeasyBase {
    /**
     * List of details of previous answers for a health profile question
     */
    history?: HealthProfileAnswerResourceAttributesHistory[];
    /**
     * The details of the latest answer for a health profile question
     */
    latest?: HealthProfileAnswerResourceAttributesLatest;
    questionId?: string;
}
export declare class HealthProfileAnswerResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class HealthProfileAnswerResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class HealthProfileAnswerResourceRelationshipsPatientLinks extends SpeakeasyBase {
    related?: string;
}
export declare class HealthProfileAnswerResourceRelationshipsPatient extends SpeakeasyBase {
    data?: HealthProfileAnswerResourceRelationshipsPatientData;
    links?: HealthProfileAnswerResourceRelationshipsPatientLinks;
}
export declare class HealthProfileAnswerResourceRelationships extends SpeakeasyBase {
    patient?: HealthProfileAnswerResourceRelationshipsPatient;
}
export declare class HealthProfileAnswerResource extends SpeakeasyBase {
    attributes?: HealthProfileAnswerResourceAttributes;
    id: string;
    links?: HealthProfileAnswerResourceLinks;
    relationships?: HealthProfileAnswerResourceRelationships;
    type: string;
}
