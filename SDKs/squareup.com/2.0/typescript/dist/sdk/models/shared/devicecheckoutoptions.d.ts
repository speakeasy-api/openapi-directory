import { SpeakeasyBase } from "../../../internal/utils";
import { TipSettings } from "./tipsettings";
export declare class DeviceCheckoutOptions extends SpeakeasyBase {
    /**
     * The unique ID of the device intended for this `TerminalCheckout`.
     *
     * @remarks
     * A list of `DeviceCode` objects can be retrieved from the /v2/devices/codes endpoint.
     * Match a `DeviceCode.device_id` value with `device_id` to get the associated device code.
     */
    deviceId: string;
    /**
     * Instructs the device to skip the receipt screen. Defaults to false.
     */
    skipReceiptScreen?: boolean;
    tipSettings?: TipSettings;
}
