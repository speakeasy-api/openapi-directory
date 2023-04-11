import { SpeakeasyBase } from "../../../internal/utils";
import { EventNotificationConfig } from "./eventnotificationconfig";
import { HttpConfig } from "./httpconfig";
import { MqttConfig } from "./mqttconfig";
import { RegistryCredential } from "./registrycredential";
import { StateNotificationConfig } from "./statenotificationconfig";
/**
 * **Beta Feature** The default logging verbosity for activity from devices in this registry. The verbosity level can be overridden by Device.log_level.
 */
export declare enum DeviceRegistryLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED",
    None = "NONE",
    Error = "ERROR",
    Info = "INFO",
    Debug = "DEBUG"
}
/**
 * A container for a group of devices.
 */
export declare class DeviceRegistry extends SpeakeasyBase {
    /**
     * The credentials used to verify the device credentials. No more than 10 credentials can be bound to a single registry at a time. The verification process occurs at the time of device creation or update. If this field is empty, no verification is performed. Otherwise, the credentials of a newly created device or added credentials of an updated device should be signed with one of these registry credentials. Note, however, that existing devices will never be affected by modifications to this list of credentials: after a device has been successfully created in a registry, it should be able to connect even if its registry credentials are revoked, deleted, or modified.
     */
    credentials?: RegistryCredential[];
    /**
     * The configuration for notification of telemetry events received from the device. All telemetry events that were successfully published by the device and acknowledged by Cloud IoT Core are guaranteed to be delivered to Cloud Pub/Sub. If multiple configurations match a message, only the first matching configuration is used. If you try to publish a device telemetry event using MQTT without specifying a Cloud Pub/Sub topic for the device's registry, the connection closes automatically. If you try to do so using an HTTP connection, an error is returned. Up to 10 configurations may be provided.
     */
    eventNotificationConfigs?: EventNotificationConfig[];
    /**
     * The configuration of the HTTP bridge for a device registry.
     */
    httpConfig?: HttpConfig;
    /**
     * The identifier of this device registry. For example, `myRegistry`.
     */
    id?: string;
    /**
     * **Beta Feature** The default logging verbosity for activity from devices in this registry. The verbosity level can be overridden by Device.log_level.
     */
    logLevel?: DeviceRegistryLogLevelEnum;
    /**
     * The configuration of MQTT for a device registry.
     */
    mqttConfig?: MqttConfig;
    /**
     * The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
     */
    name?: string;
    /**
     * The configuration for notification of new states received from the device.
     */
    stateNotificationConfig?: StateNotificationConfig;
}
