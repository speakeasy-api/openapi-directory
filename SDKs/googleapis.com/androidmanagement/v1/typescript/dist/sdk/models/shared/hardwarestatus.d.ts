import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
 */
export declare class HardwareStatus extends SpeakeasyBase {
    /**
     * Current battery temperatures in Celsius for each battery on the device.
     */
    batteryTemperatures?: number[];
    /**
     * Current CPU temperatures in Celsius for each CPU on the device.
     */
    cpuTemperatures?: number[];
    /**
     * CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.
     */
    cpuUsages?: number[];
    /**
     * The time the measurements were taken.
     */
    createTime?: string;
    /**
     * Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.
     */
    fanSpeeds?: number[];
    /**
     * Current GPU temperatures in Celsius for each GPU on the device.
     */
    gpuTemperatures?: number[];
    /**
     * Current device skin temperatures in Celsius.
     */
    skinTemperatures?: number[];
}
