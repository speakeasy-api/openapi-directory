import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DeviceHardwareCountReport } from "./googlechromemanagementv1devicehardwarecountreport";
/**
 * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
 */
export declare class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse extends SpeakeasyBase {
    /**
     * The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz).
     */
    cpuReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
    /**
     * The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16).
     */
    memoryReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
    /**
     * The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook).
     */
    modelReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
    /**
     * The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128).
     */
    storageReports?: GoogleChromeManagementV1DeviceHardwareCountReport[];
}
