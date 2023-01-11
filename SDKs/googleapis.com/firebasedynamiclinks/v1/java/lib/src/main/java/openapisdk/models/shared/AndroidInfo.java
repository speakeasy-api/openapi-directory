package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidInfo
 * Android related attributes to the Dynamic Link.
**/
public class AndroidInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidFallbackLink")
    public String androidFallbackLink;
    public AndroidInfo withAndroidFallbackLink(String androidFallbackLink) {
        this.androidFallbackLink = androidFallbackLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidLink")
    public String androidLink;
    public AndroidInfo withAndroidLink(String androidLink) {
        this.androidLink = androidLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidMinPackageVersionCode")
    public String androidMinPackageVersionCode;
    public AndroidInfo withAndroidMinPackageVersionCode(String androidMinPackageVersionCode) {
        this.androidMinPackageVersionCode = androidMinPackageVersionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidPackageName")
    public String androidPackageName;
    public AndroidInfo withAndroidPackageName(String androidPackageName) {
        this.androidPackageName = androidPackageName;
        return this;
    }
}