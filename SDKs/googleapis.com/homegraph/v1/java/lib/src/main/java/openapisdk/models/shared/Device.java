package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Device
 * Third-party device definition. Next ID = 14
**/
public class Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, Object> attributes;
    public Device withAttributes(java.util.Map<String, Object> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customData")
    public java.util.Map<String, Object> customData;
    public Device withCustomData(java.util.Map<String, Object> customData) {
        this.customData = customData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceInfo")
    public DeviceInfo deviceInfo;
    public Device withDeviceInfo(DeviceInfo deviceInfo) {
        this.deviceInfo = deviceInfo;
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
    @JsonProperty("name")
    public DeviceNames name;
    public Device withName(DeviceNames name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationSupportedByAgent")
    public Boolean notificationSupportedByAgent;
    public Device withNotificationSupportedByAgent(Boolean notificationSupportedByAgent) {
        this.notificationSupportedByAgent = notificationSupportedByAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherDeviceIds")
    public AgentOtherDeviceId[] otherDeviceIds;
    public Device withOtherDeviceIds(AgentOtherDeviceId[] otherDeviceIds) {
        this.otherDeviceIds = otherDeviceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomHint")
    public String roomHint;
    public Device withRoomHint(String roomHint) {
        this.roomHint = roomHint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structureHint")
    public String structureHint;
    public Device withStructureHint(String structureHint) {
        this.structureHint = structureHint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traits")
    public String[] traits;
    public Device withTraits(String[] traits) {
        this.traits = traits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Device withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("willReportState")
    public Boolean willReportState;
    public Device withWillReportState(Boolean willReportState) {
        this.willReportState = willReportState;
        return this;
    }
}