package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceInfo
 * Signals associated with the device making the request.
**/
public class DeviceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceModelName")
    public String deviceModelName;
    public DeviceInfo withDeviceModelName(String deviceModelName) {
        this.deviceModelName = deviceModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public DeviceInfo withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodeFromWebview")
    public String languageCodeFromWebview;
    public DeviceInfo withLanguageCodeFromWebview(String languageCodeFromWebview) {
        this.languageCodeFromWebview = languageCodeFromWebview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodeRaw")
    public String languageCodeRaw;
    public DeviceInfo withLanguageCodeRaw(String languageCodeRaw) {
        this.languageCodeRaw = languageCodeRaw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenResolutionHeight")
    public String screenResolutionHeight;
    public DeviceInfo withScreenResolutionHeight(String screenResolutionHeight) {
        this.screenResolutionHeight = screenResolutionHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenResolutionWidth")
    public String screenResolutionWidth;
    public DeviceInfo withScreenResolutionWidth(String screenResolutionWidth) {
        this.screenResolutionWidth = screenResolutionWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public DeviceInfo withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}