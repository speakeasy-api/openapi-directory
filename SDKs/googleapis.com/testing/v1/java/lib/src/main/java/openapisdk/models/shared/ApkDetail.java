package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApkDetail
 * Android application details based on application manifest and apk archive contents.
**/
public class ApkDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apkManifest")
    public ApkManifest apkManifest;
    public ApkDetail withApkManifest(ApkManifest apkManifest) {
        this.apkManifest = apkManifest;
        return this;
    }
}