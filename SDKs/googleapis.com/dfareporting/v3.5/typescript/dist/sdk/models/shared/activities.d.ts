import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Represents an activity group.
 */
export declare class Activities extends SpeakeasyBase {
    /**
     * List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
     */
    filters?: DimensionValue[];
    /**
     * The kind of resource this is, in this case dfareporting#activities.
     */
    kind?: string;
    /**
     * List of names of floodlight activity metrics.
     */
    metricNames?: string[];
}
