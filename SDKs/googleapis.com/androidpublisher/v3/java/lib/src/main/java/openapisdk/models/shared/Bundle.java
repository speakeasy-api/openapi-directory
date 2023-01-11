package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Bundle
 * Information about an app bundle. The resource for BundlesService.
**/
public class Bundle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1")
    public String sha1;
    public Bundle withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public Bundle withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public Integer versionCode;
    public Bundle withVersionCode(Integer versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}