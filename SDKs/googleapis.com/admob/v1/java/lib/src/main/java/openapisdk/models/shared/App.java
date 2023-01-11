package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * App
 * Describes an AdMob app for a specific platform (For example: Android or iOS).
**/
public class App {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public App withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAppInfo")
    public AppLinkedAppInfo linkedAppInfo;
    public App withLinkedAppInfo(AppLinkedAppInfo linkedAppInfo) {
        this.linkedAppInfo = linkedAppInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualAppInfo")
    public AppManualAppInfo manualAppInfo;
    public App withManualAppInfo(AppManualAppInfo manualAppInfo) {
        this.manualAppInfo = manualAppInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public App withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public App withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
}