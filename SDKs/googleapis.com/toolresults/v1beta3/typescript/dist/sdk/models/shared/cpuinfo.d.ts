import { SpeakeasyBase } from "../../../internal/utils";
export declare class CPUInfo extends SpeakeasyBase {
    /**
     * description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A'
     */
    cpuProcessor?: string;
    /**
     * the CPU clock speed in GHz
     */
    cpuSpeedInGhz?: number;
    /**
     * the number of CPU cores
     */
    numberOfCores?: number;
}
