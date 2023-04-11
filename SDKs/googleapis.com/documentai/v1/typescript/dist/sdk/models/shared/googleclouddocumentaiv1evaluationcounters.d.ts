import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation counters for the documents that were used.
 */
export declare class GoogleCloudDocumentaiV1EvaluationCounters extends SpeakeasyBase {
    /**
     * How many documents were used in the evaluation.
     */
    evaluatedDocumentsCount?: number;
    /**
     * How many documents were not included in the evaluation as Document AI failed to process them.
     */
    failedDocumentsCount?: number;
    /**
     * How many documents were sent for evaluation.
     */
    inputDocumentsCount?: number;
    /**
     * How many documents were not included in the evaluation as they didn't pass validation.
     */
    invalidDocumentsCount?: number;
}
