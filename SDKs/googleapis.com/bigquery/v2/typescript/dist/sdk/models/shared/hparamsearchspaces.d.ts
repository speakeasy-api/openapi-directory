import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntArrayHparamSearchSpace } from "./intarrayhparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
/**
 * Hyperparameter search spaces. These should be a subset of training_options.
 */
export declare class HparamSearchSpaces extends SpeakeasyBase {
    /**
     * Search space for string and enum.
     */
    activationFn?: StringHparamSearchSpace;
    /**
     * Search space for an int hyperparameter.
     */
    batchSize?: IntHparamSearchSpace;
    /**
     * Search space for string and enum.
     */
    boosterType?: StringHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    colsampleBylevel?: DoubleHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    colsampleBynode?: DoubleHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    colsampleBytree?: DoubleHparamSearchSpace;
    /**
     * Search space for string and enum.
     */
    dartNormalizeType?: StringHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    dropout?: DoubleHparamSearchSpace;
    /**
     * Search space for int array.
     */
    hiddenUnits?: IntArrayHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    l1Reg?: DoubleHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    l2Reg?: DoubleHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    learnRate?: DoubleHparamSearchSpace;
    /**
     * Search space for an int hyperparameter.
     */
    maxTreeDepth?: IntHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    minSplitLoss?: DoubleHparamSearchSpace;
    /**
     * Search space for an int hyperparameter.
     */
    minTreeChildWeight?: IntHparamSearchSpace;
    /**
     * Search space for an int hyperparameter.
     */
    numClusters?: IntHparamSearchSpace;
    /**
     * Search space for an int hyperparameter.
     */
    numFactors?: IntHparamSearchSpace;
    /**
     * Search space for an int hyperparameter.
     */
    numParallelTree?: IntHparamSearchSpace;
    /**
     * Search space for string and enum.
     */
    optimizer?: StringHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    subsample?: DoubleHparamSearchSpace;
    /**
     * Search space for string and enum.
     */
    treeMethod?: StringHparamSearchSpace;
    /**
     * Search space for a double hyperparameter.
     */
    walsAlpha?: DoubleHparamSearchSpace;
}
