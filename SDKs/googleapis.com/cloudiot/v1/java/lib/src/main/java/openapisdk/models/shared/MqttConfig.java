package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MqttConfig
 * The configuration of MQTT for a device registry.
**/
public class MqttConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mqttEnabledState")
    public MqttConfigMqttEnabledStateEnum mqttEnabledState;
    public MqttConfig withMqttEnabledState(MqttConfigMqttEnabledStateEnum mqttEnabledState) {
        this.mqttEnabledState = mqttEnabledState;
        return this;
    }
}