package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1DeviceInput
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
public class GoogleAppsCloudidentityDevicesV1DeviceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidSpecificAttributes")
    public GoogleAppsCloudidentityDevicesV1AndroidAttributes androidSpecificAttributes;
    public GoogleAppsCloudidentityDevicesV1DeviceInput withAndroidSpecificAttributes(GoogleAppsCloudidentityDevicesV1AndroidAttributes androidSpecificAttributes) {
        this.androidSpecificAttributes = androidSpecificAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTag")
    public String assetTag;
    public GoogleAppsCloudidentityDevicesV1DeviceInput withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public GoogleAppsCloudidentityDevicesV1DeviceInput withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public GoogleAppsCloudidentityDevicesV1DeviceInput withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public GoogleAppsCloudidentityDevicesV1DeviceInput withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacAddresses")
    public String[] wifiMacAddresses;
    public GoogleAppsCloudidentityDevicesV1DeviceInput withWifiMacAddresses(String[] wifiMacAddresses) {
        this.wifiMacAddresses = wifiMacAddresses;
        return this;
    }
}