package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1AudioStatusReport
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1AudioStatusReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDevice")
    public String inputDevice;
    public GoogleChromeManagementV1AudioStatusReport withInputDevice(String inputDevice) {
        this.inputDevice = inputDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputGain")
    public Integer inputGain;
    public GoogleChromeManagementV1AudioStatusReport withInputGain(Integer inputGain) {
        this.inputGain = inputGain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputMute")
    public Boolean inputMute;
    public GoogleChromeManagementV1AudioStatusReport withInputMute(Boolean inputMute) {
        this.inputMute = inputMute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDevice")
    public String outputDevice;
    public GoogleChromeManagementV1AudioStatusReport withOutputDevice(String outputDevice) {
        this.outputDevice = outputDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputMute")
    public Boolean outputMute;
    public GoogleChromeManagementV1AudioStatusReport withOutputMute(Boolean outputMute) {
        this.outputMute = outputMute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputVolume")
    public Integer outputVolume;
    public GoogleChromeManagementV1AudioStatusReport withOutputVolume(Integer outputVolume) {
        this.outputVolume = outputVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1AudioStatusReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
}