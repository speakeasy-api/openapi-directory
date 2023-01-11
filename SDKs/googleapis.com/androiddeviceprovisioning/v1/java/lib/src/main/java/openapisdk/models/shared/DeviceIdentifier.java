package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceIdentifier
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
**/
public class DeviceIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chromeOsAttestedDeviceId")
    public String chromeOsAttestedDeviceId;
    public DeviceIdentifier withChromeOsAttestedDeviceId(String chromeOsAttestedDeviceId) {
        this.chromeOsAttestedDeviceId = chromeOsAttestedDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public DeviceIdentifierDeviceTypeEnum deviceType;
    public DeviceIdentifier withDeviceType(DeviceIdentifierDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imei")
    public String imei;
    public DeviceIdentifier withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public DeviceIdentifier withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meid")
    public String meid;
    public DeviceIdentifier withMeid(String meid) {
        this.meid = meid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public DeviceIdentifier withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public DeviceIdentifier withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
}