/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Device - Third-party device definition.
 */
public class Device {
    /**
     * Attributes for the traits supported by the device.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, Object> attributes;

    public Device withAttributes(java.util.Map<String, Object> attributes) {
        this.attributes = attributes;
        return this;
    }
    
    /**
     * Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customData")
    public java.util.Map<String, Object> customData;

    public Device withCustomData(java.util.Map<String, Object> customData) {
        this.customData = customData;
        return this;
    }
    
    /**
     * Device information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceInfo")
    public DeviceInfo deviceInfo;

    public Device withDeviceInfo(DeviceInfo deviceInfo) {
        this.deviceInfo = deviceInfo;
        return this;
    }
    
    /**
     * Third-party device ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Device withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Identifiers used to describe the device.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public DeviceNames name;

    public Device withName(DeviceNames name) {
        this.name = name;
        return this;
    }
    
    /**
     * Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationSupportedByAgent")
    public Boolean notificationSupportedByAgent;

    public Device withNotificationSupportedByAgent(Boolean notificationSupportedByAgent) {
        this.notificationSupportedByAgent = notificationSupportedByAgent;
        return this;
    }
    
    /**
     * Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherDeviceIds")
    public AgentOtherDeviceId[] otherDeviceIds;

    public Device withOtherDeviceIds(AgentOtherDeviceId[] otherDeviceIds) {
        this.otherDeviceIds = otherDeviceIds;
        return this;
    }
    
    /**
     * Suggested name for the room where this device is installed. Google attempts to use this value during user setup.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomHint")
    public String roomHint;

    public Device withRoomHint(String roomHint) {
        this.roomHint = roomHint;
        return this;
    }
    
    /**
     * Suggested name for the structure where this device is installed. Google attempts to use this value during user setup.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structureHint")
    public String structureHint;

    public Device withStructureHint(String structureHint) {
        this.structureHint = structureHint;
        return this;
    }
    
    /**
     * Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traits")
    public String[] traits;

    public Device withTraits(String[] traits) {
        this.traits = traits;
        return this;
    }
    
    /**
     * Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public Device withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("willReportState")
    public Boolean willReportState;

    public Device withWillReportState(Boolean willReportState) {
        this.willReportState = willReportState;
        return this;
    }
    
    public Device(){}
}
