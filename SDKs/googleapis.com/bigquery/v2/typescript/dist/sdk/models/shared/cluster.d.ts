import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureValue } from "./featurevalue";
/**
 * Message containing the information about one cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    /**
     * Centroid id.
     */
    centroidId?: string;
    /**
     * Count of training data rows that were assigned to this cluster.
     */
    count?: string;
    /**
     * Values of highly variant features for this cluster.
     */
    featureValues?: FeatureValue[];
}
