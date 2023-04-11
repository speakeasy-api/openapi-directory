import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics for the dataset.
 */
export declare class TranslationEvaluationMetrics extends SpeakeasyBase {
    /**
     * Output only. BLEU score for base model.
     */
    baseBleuScore?: number;
    /**
     * Output only. BLEU score.
     */
    bleuScore?: number;
}
