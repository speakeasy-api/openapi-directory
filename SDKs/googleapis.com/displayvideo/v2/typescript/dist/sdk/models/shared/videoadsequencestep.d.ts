import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type.
 */
export declare enum VideoAdSequenceStepInteractionTypeEnum {
    InteractionTypeUnspecified = "INTERACTION_TYPE_UNSPECIFIED",
    InteractionTypePaidView = "INTERACTION_TYPE_PAID_VIEW",
    InteractionTypeSkip = "INTERACTION_TYPE_SKIP",
    InteractionTypeImpression = "INTERACTION_TYPE_IMPRESSION",
    InteractionTypeEngagedImpression = "INTERACTION_TYPE_ENGAGED_IMPRESSION"
}
/**
 * The detail of a single step in a VideoAdSequence.
 */
export declare class VideoAdSequenceStep extends SpeakeasyBase {
    /**
     * The ID of the corresponding ad group of the step.
     */
    adGroupId?: string;
    /**
     * The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type.
     */
    interactionType?: VideoAdSequenceStepInteractionTypeEnum;
    /**
     * The ID of the previous step. The first step does not have previous step.
     */
    previousStepId?: string;
    /**
     * The ID of the step.
     */
    stepId?: string;
}
