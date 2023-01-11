package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Device
 * The device resource.
**/
public class Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocked")
    public Boolean blocked;
    public Device withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public DeviceConfig config;
    public Device withConfig(DeviceConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public DeviceCredential[] credentials;
    public Device withCredentials(DeviceCredential[] credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayConfig")
    public GatewayConfig gatewayConfig;
    public Device withGatewayConfig(GatewayConfig gatewayConfig) {
        this.gatewayConfig = gatewayConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Device withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastConfigAckTime")
    public String lastConfigAckTime;
    public Device withLastConfigAckTime(String lastConfigAckTime) {
        this.lastConfigAckTime = lastConfigAckTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastConfigSendTime")
    public String lastConfigSendTime;
    public Device withLastConfigSendTime(String lastConfigSendTime) {
        this.lastConfigSendTime = lastConfigSendTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorStatus")
    public Status lastErrorStatus;
    public Device withLastErrorStatus(Status lastErrorStatus) {
        this.lastErrorStatus = lastErrorStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorTime")
    public String lastErrorTime;
    public Device withLastErrorTime(String lastErrorTime) {
        this.lastErrorTime = lastErrorTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEventTime")
    public String lastEventTime;
    public Device withLastEventTime(String lastEventTime) {
        this.lastEventTime = lastEventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastHeartbeatTime")
    public String lastHeartbeatTime;
    public Device withLastHeartbeatTime(String lastHeartbeatTime) {
        this.lastHeartbeatTime = lastHeartbeatTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStateTime")
    public String lastStateTime;
    public Device withLastStateTime(String lastStateTime) {
        this.lastStateTime = lastStateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logLevel")
    public DeviceLogLevelEnum logLevel;
    public Device withLogLevel(DeviceLogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Device withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Device withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numId")
    public String numId;
    public Device withNumId(String numId) {
        this.numId = numId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DeviceState state;
    public Device withState(DeviceState state) {
        this.state = state;
        return this;
    }
}