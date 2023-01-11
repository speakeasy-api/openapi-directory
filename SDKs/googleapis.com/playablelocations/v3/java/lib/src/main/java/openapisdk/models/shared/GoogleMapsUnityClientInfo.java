package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsUnityClientInfo
 * Client information.
**/
public class GoogleMapsUnityClientInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiClient")
    public String apiClient;
    public GoogleMapsUnityClientInfo withApiClient(String apiClient) {
        this.apiClient = apiClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationId")
    public String applicationId;
    public GoogleMapsUnityClientInfo withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationVersion")
    public String applicationVersion;
    public GoogleMapsUnityClientInfo withApplicationVersion(String applicationVersion) {
        this.applicationVersion = applicationVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceModel")
    public String deviceModel;
    public GoogleMapsUnityClientInfo withDeviceModel(String deviceModel) {
        this.deviceModel = deviceModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleMapsUnityClientInfo withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystem")
    public String operatingSystem;
    public GoogleMapsUnityClientInfo withOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemBuild")
    public String operatingSystemBuild;
    public GoogleMapsUnityClientInfo withOperatingSystemBuild(String operatingSystemBuild) {
        this.operatingSystemBuild = operatingSystemBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public GoogleMapsUnityClientInfoPlatformEnum platform;
    public GoogleMapsUnityClientInfo withPlatform(GoogleMapsUnityClientInfoPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
}