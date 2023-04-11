import { SpeakeasyBase } from "../../../internal/utils";
import { CategoricalValue } from "./categoricalvalue";
/**
 * Representative value of a single feature within the cluster.
 */
export declare class FeatureValue extends SpeakeasyBase {
    /**
     * Representative value of a categorical feature.
     */
    categoricalValue?: CategoricalValue;
    /**
     * The feature column name.
     */
    featureColumn?: string;
    /**
     * The numerical feature value. This is the centroid value for this feature.
     */
    numericalValue?: number;
}
