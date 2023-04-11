import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
 */
export declare class HardwareInfo extends SpeakeasyBase {
    /**
     * Battery shutdown temperature thresholds in Celsius for each battery on the device.
     */
    batteryShutdownTemperatures?: number[];
    /**
     * Battery throttling temperature thresholds in Celsius for each battery on the device.
     */
    batteryThrottlingTemperatures?: number[];
    /**
     * Brand of the device. For example, Google.
     */
    brand?: string;
    /**
     * CPU shutdown temperature thresholds in Celsius for each CPU on the device.
     */
    cpuShutdownTemperatures?: number[];
    /**
     * CPU throttling temperature thresholds in Celsius for each CPU on the device.
     */
    cpuThrottlingTemperatures?: number[];
    /**
     * Baseband version. For example, MDM9625_104662.22.05.34p.
     */
    deviceBasebandVersion?: string;
    /**
     * Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above.
     */
    enterpriseSpecificId?: string;
    /**
     * GPU shutdown temperature thresholds in Celsius for each GPU on the device.
     */
    gpuShutdownTemperatures?: number[];
    /**
     * GPU throttling temperature thresholds in Celsius for each GPU on the device.
     */
    gpuThrottlingTemperatures?: number[];
    /**
     * Name of the hardware. For example, Angler.
     */
    hardware?: string;
    /**
     * Manufacturer. For example, Motorola.
     */
    manufacturer?: string;
    /**
     * The model of the device. For example, Asus Nexus 7.
     */
    model?: string;
    /**
     * The device serial number.
     */
    serialNumber?: string;
    /**
     * Device skin shutdown temperature thresholds in Celsius.
     */
    skinShutdownTemperatures?: number[];
    /**
     * Device skin throttling temperature thresholds in Celsius.
     */
    skinThrottlingTemperatures?: number[];
}
