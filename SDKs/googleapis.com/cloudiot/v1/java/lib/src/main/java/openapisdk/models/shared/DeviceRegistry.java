package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceRegistry
 * A container for a group of devices.
**/
public class DeviceRegistry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public RegistryCredential[] credentials;
    public DeviceRegistry withCredentials(RegistryCredential[] credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventNotificationConfigs")
    public EventNotificationConfig[] eventNotificationConfigs;
    public DeviceRegistry withEventNotificationConfigs(EventNotificationConfig[] eventNotificationConfigs) {
        this.eventNotificationConfigs = eventNotificationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpConfig")
    public HttpConfig httpConfig;
    public DeviceRegistry withHttpConfig(HttpConfig httpConfig) {
        this.httpConfig = httpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeviceRegistry withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logLevel")
    public DeviceRegistryLogLevelEnum logLevel;
    public DeviceRegistry withLogLevel(DeviceRegistryLogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mqttConfig")
    public MqttConfig mqttConfig;
    public DeviceRegistry withMqttConfig(MqttConfig mqttConfig) {
        this.mqttConfig = mqttConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeviceRegistry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateNotificationConfig")
    public StateNotificationConfig stateNotificationConfig;
    public DeviceRegistry withStateNotificationConfig(StateNotificationConfig stateNotificationConfig) {
        this.stateNotificationConfig = stateNotificationConfig;
        return this;
    }
}