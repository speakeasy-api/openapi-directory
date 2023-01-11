package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1BrowserVersion
 * Describes a browser version and its install count.
**/
public class GoogleChromeManagementV1BrowserVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public GoogleChromeManagementV1BrowserVersionChannelEnum channel;
    public GoogleChromeManagementV1BrowserVersion withChannel(GoogleChromeManagementV1BrowserVersionChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GoogleChromeManagementV1BrowserVersion withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceOsVersion")
    public String deviceOsVersion;
    public GoogleChromeManagementV1BrowserVersion withDeviceOsVersion(String deviceOsVersion) {
        this.deviceOsVersion = deviceOsVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public GoogleChromeManagementV1BrowserVersionSystemEnum system;
    public GoogleChromeManagementV1BrowserVersion withSystem(GoogleChromeManagementV1BrowserVersionSystemEnum system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GoogleChromeManagementV1BrowserVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}