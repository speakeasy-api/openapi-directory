package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExternallyHostedApkUsesPermission
 * A permission used by this APK.
**/
public class ExternallyHostedApkUsesPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSdkVersion")
    public Integer maxSdkVersion;
    public ExternallyHostedApkUsesPermission withMaxSDKVersion(Integer maxSdkVersion) {
        this.maxSdkVersion = maxSdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ExternallyHostedApkUsesPermission withName(String name) {
        this.name = name;
        return this;
    }
}