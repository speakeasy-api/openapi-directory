import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains annotation details specific to classification.
 */
export declare class ClassificationAnnotation extends SpeakeasyBase {
    /**
     * Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence that the annotation is positive. If a user approves an annotation as negative or positive, the score value remains unchanged. If a user creates an annotation, the score is 0 for negative or 1 for positive.
     */
    score?: number;
}
