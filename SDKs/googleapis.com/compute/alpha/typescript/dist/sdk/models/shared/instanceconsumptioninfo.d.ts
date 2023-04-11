import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceConsumptionInfo extends SpeakeasyBase {
    /**
     * The number of virtual CPUs that are available to the instance.
     */
    guestCpus?: number;
    /**
     * The amount of local SSD storage available to the instance, defined in GiB.
     */
    localSsdGb?: number;
    /**
     * The amount of physical memory available to the instance, defined in MiB.
     */
    memoryMb?: number;
    /**
     * The minimal guaranteed number of virtual CPUs that are reserved.
     */
    minNodeCpus?: number;
}
