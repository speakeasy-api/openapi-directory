import { SpeakeasyBase } from "../../../internal/utils";
import { BiosDetails } from "./biosdetails";
/**
 * CPU hyperthreading support.
 */
export declare enum VirtualMachineArchitectureDetailsHyperthreadingEnum {
    HyperThreadingUnspecified = "HYPER_THREADING_UNSPECIFIED",
    HyperThreadingDisabled = "HYPER_THREADING_DISABLED",
    HyperThreadingEnabled = "HYPER_THREADING_ENABLED"
}
/**
 * Details of the VM architecture.
 */
export declare class VirtualMachineArchitectureDetails extends SpeakeasyBase {
    /**
     * Details about the BIOS.
     */
    bios?: BiosDetails;
    /**
     * CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.
     */
    cpuArchitecture?: string;
    /**
     * CPU manufacturer, e.g., "Intel", "AMD".
     */
    cpuManufacturer?: string;
    /**
     * CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.
     */
    cpuName?: string;
    /**
     * Number of processor sockets allocated to the machine.
     */
    cpuSocketCount?: number;
    /**
     * Number of CPU threads allocated to the machine.
     */
    cpuThreadCount?: number;
    /**
     * Firmware (BIOS/efi).
     */
    firmware?: string;
    /**
     * CPU hyperthreading support.
     */
    hyperthreading?: VirtualMachineArchitectureDetailsHyperthreadingEnum;
    /**
     * Hardware vendor.
     */
    vendor?: string;
}
