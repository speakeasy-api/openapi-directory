package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1NetworkDevice
 * Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1NetworkDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iccid")
    public String iccid;
    public GoogleChromeManagementV1NetworkDevice withIccid(String iccid) {
        this.iccid = iccid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imei")
    public String imei;
    public GoogleChromeManagementV1NetworkDevice withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAddress")
    public String macAddress;
    public GoogleChromeManagementV1NetworkDevice withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mdn")
    public String mdn;
    public GoogleChromeManagementV1NetworkDevice withMdn(String mdn) {
        this.mdn = mdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meid")
    public String meid;
    public GoogleChromeManagementV1NetworkDevice withMeid(String meid) {
        this.meid = meid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleChromeManagementV1NetworkDeviceTypeEnum type;
    public GoogleChromeManagementV1NetworkDevice withType(GoogleChromeManagementV1NetworkDeviceTypeEnum type) {
        this.type = type;
        return this;
    }
}