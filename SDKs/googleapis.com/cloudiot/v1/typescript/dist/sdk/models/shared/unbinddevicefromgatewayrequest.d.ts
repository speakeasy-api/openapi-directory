import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for `UnbindDeviceFromGateway`.
 */
export declare class UnbindDeviceFromGatewayRequest extends SpeakeasyBase {
    /**
     * Required. The device to disassociate from the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.
     */
    deviceId?: string;
    /**
     * Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.
     */
    gatewayId?: string;
}
