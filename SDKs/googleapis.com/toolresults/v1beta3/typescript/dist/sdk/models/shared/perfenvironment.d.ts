import { SpeakeasyBase } from "../../../internal/utils";
import { CPUInfo } from "./cpuinfo";
import { MemoryInfo } from "./memoryinfo";
/**
 * Encapsulates performance environment info
 */
export declare class PerfEnvironment extends SpeakeasyBase {
    cpuInfo?: CPUInfo;
    memoryInfo?: MemoryInfo;
}
