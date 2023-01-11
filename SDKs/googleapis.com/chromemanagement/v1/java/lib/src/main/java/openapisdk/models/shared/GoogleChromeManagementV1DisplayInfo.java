package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1DisplayInfo
 * Information for a display.
**/
public class GoogleChromeManagementV1DisplayInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public GoogleChromeManagementV1DisplayInfo withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isInternal")
    public Boolean isInternal;
    public GoogleChromeManagementV1DisplayInfo withIsInternal(Boolean isInternal) {
        this.isInternal = isInternal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshRate")
    public Integer refreshRate;
    public GoogleChromeManagementV1DisplayInfo withRefreshRate(Integer refreshRate) {
        this.refreshRate = refreshRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolutionHeight")
    public Integer resolutionHeight;
    public GoogleChromeManagementV1DisplayInfo withResolutionHeight(Integer resolutionHeight) {
        this.resolutionHeight = resolutionHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolutionWidth")
    public Integer resolutionWidth;
    public GoogleChromeManagementV1DisplayInfo withResolutionWidth(Integer resolutionWidth) {
        this.resolutionWidth = resolutionWidth;
        return this;
    }
}