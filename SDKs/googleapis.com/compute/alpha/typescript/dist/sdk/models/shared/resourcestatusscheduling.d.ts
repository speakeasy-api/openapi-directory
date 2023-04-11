import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResourceStatusScheduling extends SpeakeasyBase {
    /**
     * Specifies the availability domain (AD), which this instance should be scheduled on. The AD belongs to the spread GroupPlacementPolicy resource policy that has been assigned to the instance. Specify a value between 1-max count of availability domains in your GroupPlacementPolicy. See go/placement-policy-extension for more details.
     */
    availabilityDomain?: number;
    /**
     * Time in future when the instance will be terminated in RFC3339 text format.
     */
    terminationTimestamp?: string;
}
