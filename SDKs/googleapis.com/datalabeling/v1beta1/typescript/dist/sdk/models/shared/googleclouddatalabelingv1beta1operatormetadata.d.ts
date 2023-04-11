import { SpeakeasyBase } from "../../../internal/utils";
/**
 * General information useful for labels coming from contributors.
 */
export declare class GoogleCloudDatalabelingV1beta1OperatorMetadata extends SpeakeasyBase {
    /**
     * Comments from contributors.
     */
    comments?: string[];
    /**
     * The total number of contributors that choose this label.
     */
    labelVotes?: number;
    /**
     * Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).
     */
    score?: number;
    /**
     * The total number of contributors that answer this question.
     */
    totalVotes?: number;
}
