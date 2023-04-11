import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This folder consists of all endpoints to modify and control the device.
 */
export declare class DeviceSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Night Mode settings
     *
     * @remarks
     * This sets night mode options.
     * To view currently set values, use /setup/eureka_info.
     * If `enabled` is set to false, night mode is disabled and the other values do not matter.
     * `led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.
     * `demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).
     * `windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.
     */
    nightModesettings(req: shared.NightModesettingsRequest, config?: AxiosRequestConfig): Promise<operations.NightModesettingsResponse>;
    /**
     * Reboot and Factory Reset
     *
     * @remarks
     * This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).
     */
    rebootandFactoryReset(req: shared.RebootandFactoryResetRequest, config?: AxiosRequestConfig): Promise<operations.RebootandFactoryResetResponse>;
    /**
     * Set Eureka Info
     *
     * @remarks
     * This can set custom values to some options.
     *
     * Only fields to be modified need to be sent, not all. The example has some modifiable fields.
     *
     * TODO: List all modifiable fields.
     *
     * Sending non-existant fields will still return a 200 OK, but they are not saved.
     */
    setEurekaInfo(req: shared.SetEurekaInfoRequest, config?: AxiosRequestConfig): Promise<operations.SetEurekaInfoResponse>;
}
