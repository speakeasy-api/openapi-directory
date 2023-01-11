package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApkManifest
 * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
**/
public class ApkManifest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationLabel")
    public String applicationLabel;
    public ApkManifest withApplicationLabel(String applicationLabel) {
        this.applicationLabel = applicationLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentFilters")
    public IntentFilter[] intentFilters;
    public ApkManifest withIntentFilters(IntentFilter[] intentFilters) {
        this.intentFilters = intentFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSdkVersion")
    public Integer maxSdkVersion;
    public ApkManifest withMaxSDKVersion(Integer maxSdkVersion) {
        this.maxSdkVersion = maxSdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Metadata[] metadata;
    public ApkManifest withMetadata(Metadata[] metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minSdkVersion")
    public Integer minSdkVersion;
    public ApkManifest withMinSDKVersion(Integer minSdkVersion) {
        this.minSdkVersion = minSdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public ApkManifest withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSdkVersion")
    public Integer targetSdkVersion;
    public ApkManifest withTargetSDKVersion(Integer targetSdkVersion) {
        this.targetSdkVersion = targetSdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usesFeature")
    public UsesFeature[] usesFeature;
    public ApkManifest withUsesFeature(UsesFeature[] usesFeature) {
        this.usesFeature = usesFeature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usesPermission")
    public String[] usesPermission;
    public ApkManifest withUsesPermission(String[] usesPermission) {
        this.usesPermission = usesPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public String versionCode;
    public ApkManifest withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionName")
    public String versionName;
    public ApkManifest withVersionName(String versionName) {
        this.versionName = versionName;
        return this;
    }
}