package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1InstalledApp
 * Describes an installed app.
**/
public class GoogleChromeManagementV1InstalledApp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GoogleChromeManagementV1InstalledApp withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInstallType")
    public GoogleChromeManagementV1InstalledAppAppInstallTypeEnum appInstallType;
    public GoogleChromeManagementV1InstalledApp withAppInstallType(GoogleChromeManagementV1InstalledAppAppInstallTypeEnum appInstallType) {
        this.appInstallType = appInstallType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appSource")
    public GoogleChromeManagementV1InstalledAppAppSourceEnum appSource;
    public GoogleChromeManagementV1InstalledApp withAppSource(GoogleChromeManagementV1InstalledAppAppSourceEnum appSource) {
        this.appSource = appSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appType")
    public GoogleChromeManagementV1InstalledAppAppTypeEnum appType;
    public GoogleChromeManagementV1InstalledApp withAppType(GoogleChromeManagementV1InstalledAppAppTypeEnum appType) {
        this.appType = appType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserDeviceCount")
    public String browserDeviceCount;
    public GoogleChromeManagementV1InstalledApp withBrowserDeviceCount(String browserDeviceCount) {
        this.browserDeviceCount = browserDeviceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleChromeManagementV1InstalledApp withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GoogleChromeManagementV1InstalledApp withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleChromeManagementV1InstalledApp withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepageUri")
    public String homepageUri;
    public GoogleChromeManagementV1InstalledApp withHomepageUri(String homepageUri) {
        this.homepageUri = homepageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osUserCount")
    public String osUserCount;
    public GoogleChromeManagementV1InstalledApp withOsUserCount(String osUserCount) {
        this.osUserCount = osUserCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public GoogleChromeManagementV1InstalledApp withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}