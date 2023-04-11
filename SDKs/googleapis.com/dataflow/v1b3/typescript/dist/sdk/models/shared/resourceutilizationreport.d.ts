import { SpeakeasyBase } from "../../../internal/utils";
import { CPUTime } from "./cputime";
import { MemInfo } from "./meminfo";
/**
 * Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
 */
export declare class ResourceUtilizationReport extends SpeakeasyBase {
    /**
     * Per container information. Key: container name.
     */
    containers?: Record<string, ResourceUtilizationReport>;
    /**
     * CPU utilization samples.
     */
    cpuTime?: CPUTime[];
    /**
     * Memory utilization samples.
     */
    memoryInfo?: MemInfo[];
}
