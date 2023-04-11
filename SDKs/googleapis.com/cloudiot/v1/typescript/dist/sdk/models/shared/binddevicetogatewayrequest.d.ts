import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for `BindDeviceToGateway`.
 */
export declare class BindDeviceToGatewayRequest extends SpeakeasyBase {
    /**
     * Required. The device to associate with the specified gateway. The value of `device_id` can be either the device numeric ID or the user-defined device identifier.
     */
    deviceId?: string;
    /**
     * Required. The value of `gateway_id` can be either the device numeric ID or the user-defined device identifier.
     */
    gatewayId?: string;
}
