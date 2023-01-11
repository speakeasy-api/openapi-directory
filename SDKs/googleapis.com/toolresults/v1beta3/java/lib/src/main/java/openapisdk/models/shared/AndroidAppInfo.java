package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidAppInfo
 * Android app information.
**/
public class AndroidAppInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AndroidAppInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public AndroidAppInfo withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public String versionCode;
    public AndroidAppInfo withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionName")
    public String versionName;
    public AndroidAppInfo withVersionName(String versionName) {
        this.versionName = versionName;
        return this;
    }
}