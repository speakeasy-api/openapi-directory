package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExternallyHostedApk
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
**/
public class ExternallyHostedApk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationLabel")
    public String applicationLabel;
    public ExternallyHostedApk withApplicationLabel(String applicationLabel) {
        this.applicationLabel = applicationLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateBase64s")
    public String[] certificateBase64s;
    public ExternallyHostedApk withCertificateBase64s(String[] certificateBase64s) {
        this.certificateBase64s = certificateBase64s;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externallyHostedUrl")
    public String externallyHostedUrl;
    public ExternallyHostedApk withExternallyHostedUrl(String externallyHostedUrl) {
        this.externallyHostedUrl = externallyHostedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSha1Base64")
    public String fileSha1Base64;
    public ExternallyHostedApk withFileSha1Base64(String fileSha1Base64) {
        this.fileSha1Base64 = fileSha1Base64;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSha256Base64")
    public String fileSha256Base64;
    public ExternallyHostedApk withFileSha256Base64(String fileSha256Base64) {
        this.fileSha256Base64 = fileSha256Base64;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public String fileSize;
    public ExternallyHostedApk withFileSize(String fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconBase64")
    public String iconBase64;
    public ExternallyHostedApk withIconBase64(String iconBase64) {
        this.iconBase64 = iconBase64;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumSdk")
    public Integer maximumSdk;
    public ExternallyHostedApk withMaximumSDK(Integer maximumSdk) {
        this.maximumSdk = maximumSdk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumSdk")
    public Integer minimumSdk;
    public ExternallyHostedApk withMinimumSDK(Integer minimumSdk) {
        this.minimumSdk = minimumSdk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeCodes")
    public String[] nativeCodes;
    public ExternallyHostedApk withNativeCodes(String[] nativeCodes) {
        this.nativeCodes = nativeCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public ExternallyHostedApk withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usesFeatures")
    public String[] usesFeatures;
    public ExternallyHostedApk withUsesFeatures(String[] usesFeatures) {
        this.usesFeatures = usesFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usesPermissions")
    public UsesPermission[] usesPermissions;
    public ExternallyHostedApk withUsesPermissions(UsesPermission[] usesPermissions) {
        this.usesPermissions = usesPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public Integer versionCode;
    public ExternallyHostedApk withVersionCode(Integer versionCode) {
        this.versionCode = versionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionName")
    public String versionName;
    public ExternallyHostedApk withVersionName(String versionName) {
        this.versionName = versionName;
        return this;
    }
}