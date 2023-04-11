import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The category for the health profile definition
 */
export declare enum HealthQuestionDefinitionResourceAttributesCategoryEnum {
    LifestyleBehaviors = "lifestyle_behaviors",
    MentalWellbeing = "mental_wellbeing",
    PreventativeCare = "preventative_care"
}
/**
 * The label, value and icon for the answer choices for the question
 */
export declare class HealthQuestionDefinitionResourceAttributesFormatData extends SpeakeasyBase {
    icon?: string;
    label?: string;
    value?: string;
}
/**
 * The list of formats for the health profile definition
 */
export declare class HealthQuestionDefinitionResourceAttributesFormat extends SpeakeasyBase {
    data?: HealthQuestionDefinitionResourceAttributesFormatData[];
    type?: string;
}
/**
 * The age and gender requirement for the question to be included
 */
export declare class HealthQuestionDefinitionResourceAttributesRequirements extends SpeakeasyBase {
    property?: string;
    /**
     * Specifies if the value in property should be equal to the one in value
     */
    shouldBeEqual?: boolean;
    /**
     * Specifies if the value in property should be greater than the one in value
     */
    shouldBeGreaterThan?: number;
    /**
     * Specifies if the value in property should be less than the one in value
     */
    shouldBeLessThan?: number;
    /**
     * The value to be compared with the one in property, based on shouldBeEqual, shouldBeGreaterThan, or shouldBeLessThan
     */
    value?: string;
}
export declare class HealthQuestionDefinitionResourceAttributes extends SpeakeasyBase {
    /**
     * The category for the health profile definition
     */
    category?: HealthQuestionDefinitionResourceAttributesCategoryEnum;
    /**
     * The list of formats for the health profile definition
     */
    format?: HealthQuestionDefinitionResourceAttributesFormat;
    /**
     * The lsit of age and gender requirements for the question to be included
     */
    requirements?: HealthQuestionDefinitionResourceAttributesRequirements[];
    /**
     * The question text which corresponds to the answer choices
     */
    text?: string;
}
export declare class HealthQuestionDefinitionResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class HealthQuestionDefinitionResource extends SpeakeasyBase {
    attributes?: HealthQuestionDefinitionResourceAttributes;
    id: string;
    links?: HealthQuestionDefinitionResourceLinks;
    relationships?: Record<string, any>;
    type: string;
}
