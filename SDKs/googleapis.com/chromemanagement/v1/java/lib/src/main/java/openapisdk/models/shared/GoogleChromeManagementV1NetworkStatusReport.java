package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1NetworkStatusReport
 * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes
**/
public class GoogleChromeManagementV1NetworkStatusReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionState")
    public GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum connectionState;
    public GoogleChromeManagementV1NetworkStatusReport withConnectionState(GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionType")
    public GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum connectionType;
    public GoogleChromeManagementV1NetworkStatusReport withConnectionType(GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionOn")
    public Boolean encryptionOn;
    public GoogleChromeManagementV1NetworkStatusReport withEncryptionOn(Boolean encryptionOn) {
        this.encryptionOn = encryptionOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayIpAddress")
    public String gatewayIpAddress;
    public GoogleChromeManagementV1NetworkStatusReport withGatewayIpAddress(String gatewayIpAddress) {
        this.gatewayIpAddress = gatewayIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public GoogleChromeManagementV1NetworkStatusReport withGuid(String guid) {
        this.guid = guid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lanIpAddress")
    public String lanIpAddress;
    public GoogleChromeManagementV1NetworkStatusReport withLanIpAddress(String lanIpAddress) {
        this.lanIpAddress = lanIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingBitRateMbps")
    public String receivingBitRateMbps;
    public GoogleChromeManagementV1NetworkStatusReport withReceivingBitRateMbps(String receivingBitRateMbps) {
        this.receivingBitRateMbps = receivingBitRateMbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1NetworkStatusReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleFrequency")
    public String sampleFrequency;
    public GoogleChromeManagementV1NetworkStatusReport withSampleFrequency(String sampleFrequency) {
        this.sampleFrequency = sampleFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signalStrengthDbm")
    public Integer signalStrengthDbm;
    public GoogleChromeManagementV1NetworkStatusReport withSignalStrengthDbm(Integer signalStrengthDbm) {
        this.signalStrengthDbm = signalStrengthDbm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionBitRateMbps")
    public String transmissionBitRateMbps;
    public GoogleChromeManagementV1NetworkStatusReport withTransmissionBitRateMbps(String transmissionBitRateMbps) {
        this.transmissionBitRateMbps = transmissionBitRateMbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionPowerDbm")
    public Integer transmissionPowerDbm;
    public GoogleChromeManagementV1NetworkStatusReport withTransmissionPowerDbm(Integer transmissionPowerDbm) {
        this.transmissionPowerDbm = transmissionPowerDbm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiLinkQuality")
    public String wifiLinkQuality;
    public GoogleChromeManagementV1NetworkStatusReport withWifiLinkQuality(String wifiLinkQuality) {
        this.wifiLinkQuality = wifiLinkQuality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiPowerManagementEnabled")
    public Boolean wifiPowerManagementEnabled;
    public GoogleChromeManagementV1NetworkStatusReport withWifiPowerManagementEnabled(Boolean wifiPowerManagementEnabled) {
        this.wifiPowerManagementEnabled = wifiPowerManagementEnabled;
        return this;
    }
}