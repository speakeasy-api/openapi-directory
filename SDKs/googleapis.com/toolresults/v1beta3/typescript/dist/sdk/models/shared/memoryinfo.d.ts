import { SpeakeasyBase } from "../../../internal/utils";
export declare class MemoryInfo extends SpeakeasyBase {
    /**
     * Maximum memory that can be allocated to the process in KiB
     */
    memoryCapInKibibyte?: string;
    /**
     * Total memory available on the device in KiB
     */
    memoryTotalInKibibyte?: string;
}
