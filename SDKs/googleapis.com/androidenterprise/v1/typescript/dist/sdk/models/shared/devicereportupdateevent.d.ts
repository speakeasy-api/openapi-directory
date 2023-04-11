import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceReport } from "./devicereport";
/**
 * An event generated when an updated device report is available.
 */
export declare class DeviceReportUpdateEvent extends SpeakeasyBase {
    /**
     * The Android ID of the device. This field will always be present.
     */
    deviceId?: string;
    /**
     * Device report updated with the latest app states for managed apps on the device.
     */
    report?: DeviceReport;
    /**
     * The ID of the user. This field will always be present.
     */
    userId?: string;
}
