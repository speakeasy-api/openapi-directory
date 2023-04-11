import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates how to authorize and/or authenticate devices to access the gateway.
 */
export declare enum GatewayConfigGatewayAuthMethodEnum {
    GatewayAuthMethodUnspecified = "GATEWAY_AUTH_METHOD_UNSPECIFIED",
    AssociationOnly = "ASSOCIATION_ONLY",
    DeviceAuthTokenOnly = "DEVICE_AUTH_TOKEN_ONLY",
    AssociationAndDeviceAuthToken = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"
}
/**
 * Indicates whether the device is a gateway.
 */
export declare enum GatewayConfigGatewayTypeEnum {
    GatewayTypeUnspecified = "GATEWAY_TYPE_UNSPECIFIED",
    Gateway = "GATEWAY",
    NonGateway = "NON_GATEWAY"
}
/**
 * Gateway-related configuration and state.
 */
export declare class GatewayConfig extends SpeakeasyBase {
    /**
     * Indicates how to authorize and/or authenticate devices to access the gateway.
     */
    gatewayAuthMethod?: GatewayConfigGatewayAuthMethodEnum;
    /**
     * Indicates whether the device is a gateway.
     */
    gatewayType?: GatewayConfigGatewayTypeEnum;
    /**
     * [Output only] The ID of the gateway the device accessed most recently.
     */
    lastAccessedGatewayId?: string;
    /**
     * [Output only] The most recent time at which the device accessed the gateway specified in `last_accessed_gateway`.
     */
    lastAccessedGatewayTime?: string;
}
