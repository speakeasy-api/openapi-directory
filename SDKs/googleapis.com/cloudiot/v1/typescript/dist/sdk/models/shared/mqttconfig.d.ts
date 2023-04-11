import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If enabled, allows connections using the MQTT protocol. Otherwise, MQTT connections to this registry will fail.
 */
export declare enum MqttConfigMqttEnabledStateEnum {
    MqttStateUnspecified = "MQTT_STATE_UNSPECIFIED",
    MqttEnabled = "MQTT_ENABLED",
    MqttDisabled = "MQTT_DISABLED"
}
/**
 * The configuration of MQTT for a device registry.
 */
export declare class MqttConfig extends SpeakeasyBase {
    /**
     * If enabled, allows connections using the MQTT protocol. Otherwise, MQTT connections to this registry will fail.
     */
    mqttEnabledState?: MqttConfigMqttEnabledStateEnum;
}
