package openapisdk.models.shared;


public enum MqttConfigMqttEnabledStateEnum {
    MQTT_STATE_UNSPECIFIED("MQTT_STATE_UNSPECIFIED"),
    MQTT_ENABLED("MQTT_ENABLED"),
    MQTT_DISABLED("MQTT_DISABLED");

    public final String value;

    private MqttConfigMqttEnabledStateEnum(String value) {
        this.value = value;
    }
}
