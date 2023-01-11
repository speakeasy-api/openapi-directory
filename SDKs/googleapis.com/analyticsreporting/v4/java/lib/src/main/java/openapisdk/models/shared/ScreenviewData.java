package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScreenviewData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appName")
    public String appName;
    public ScreenviewData withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceBranding")
    public String mobileDeviceBranding;
    public ScreenviewData withMobileDeviceBranding(String mobileDeviceBranding) {
        this.mobileDeviceBranding = mobileDeviceBranding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceModel")
    public String mobileDeviceModel;
    public ScreenviewData withMobileDeviceModel(String mobileDeviceModel) {
        this.mobileDeviceModel = mobileDeviceModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenName")
    public String screenName;
    public ScreenviewData withScreenName(String screenName) {
        this.screenName = screenName;
        return this;
    }
}