package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceInput
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
public class DeviceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidSpecificAttributes")
    public AndroidAttributes androidSpecificAttributes;
    public DeviceInput withAndroidSpecificAttributes(AndroidAttributes androidSpecificAttributes) {
        this.androidSpecificAttributes = androidSpecificAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTag")
    public String assetTag;
    public DeviceInput withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTypes")
    public DeviceClientTypesEnum[] clientTypes;
    public DeviceInput withClientTypes(DeviceClientTypesEnum[] clientTypes) {
        this.clientTypes = clientTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public DeviceInput withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointVerificationSpecificAttributes")
    public EndpointVerificationSpecificAttributes endpointVerificationSpecificAttributes;
    public DeviceInput withEndpointVerificationSpecificAttributes(EndpointVerificationSpecificAttributes endpointVerificationSpecificAttributes) {
        this.endpointVerificationSpecificAttributes = endpointVerificationSpecificAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public DeviceInput withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public DeviceInput withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public DeviceInput withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacAddresses")
    public String[] wifiMacAddresses;
    public DeviceInput withWifiMacAddresses(String[] wifiMacAddresses) {
        this.wifiMacAddresses = wifiMacAddresses;
        return this;
    }
}