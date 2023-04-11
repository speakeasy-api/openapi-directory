import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list of classifiers and versions.
 */
export declare class APIClassifierOut extends SpeakeasyBase {
    /**
     * The classifier name
     */
    classifierName?: string;
    /**
     * True if the classifier is learning
     */
    learning?: boolean;
    /**
     * True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1)
     */
    probabilityCalibrated?: boolean;
    /**
     * True if the classifier is serving requests (has reached minimal learning, is not shutting down)
     */
    serving?: boolean;
    /**
     * True if the classifier is shutting down
     */
    shuttingDown?: boolean;
}
