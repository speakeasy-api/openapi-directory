import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceConfig } from "./deviceconfig";
import { DeviceCredential } from "./devicecredential";
import { DeviceState } from "./devicestate";
import { GatewayConfig } from "./gatewayconfig";
import { Status } from "./status";
/**
 * **Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used.
 */
export declare enum DeviceLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED",
    None = "NONE",
    Error = "ERROR",
    Info = "INFO",
    Debug = "DEBUG"
}
/**
 * The device resource.
 */
export declare class Device extends SpeakeasyBase {
    /**
     * If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance.
     */
    blocked?: boolean;
    /**
     * The device configuration. Eventually delivered to devices.
     */
    config?: DeviceConfig;
    /**
     * The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the `DeviceRegistry.credentials` field.
     */
    credentials?: DeviceCredential[];
    /**
     * Gateway-related configuration and state.
     */
    gatewayConfig?: GatewayConfig;
    /**
     * The user-defined device identifier. The device ID must be unique within a device registry.
     */
    id?: string;
    /**
     * [Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT.
     */
    lastConfigAckTime?: string;
    /**
     * [Output only] The last time a cloud-to-device config version was sent to the device.
     */
    lastConfigSendTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    lastErrorStatus?: Status;
    /**
     * [Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of 'last_error_status'.
     */
    lastErrorTime?: string;
    /**
     * [Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
     */
    lastEventTime?: string;
    /**
     * [Output only] The last time an MQTT `PINGREQ` was received. This field applies only to devices connecting through MQTT. MQTT clients usually only send `PINGREQ` messages if the connection is idle, and no other messages have been sent. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
     */
    lastHeartbeatTime?: string;
    /**
     * [Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes.
     */
    lastStateTime?: string;
    /**
     * **Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used.
     */
    logLevel?: DeviceLogLevelEnum;
    /**
     * The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device. Keys must conform to the regular expression a-zA-Z+ and be less than 128 bytes in length. Values are free-form strings. Each value must be less than or equal to 32 KB in size. The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500.
     */
    metadata?: Record<string, string>;
    /**
     * The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
     */
    name?: string;
    /**
     * [Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique.
     */
    numId?: string;
    /**
     * The device state, as reported by the device.
     */
    state?: DeviceState;
}
