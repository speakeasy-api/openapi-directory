package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Apk
 * Information about an APK. The resource for ApksService.
**/
public class Apk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binary")
    public ApkBinary binary;
    public Apk withBinary(ApkBinary binary) {
        this.binary = binary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public Integer versionCode;
    public Apk withVersionCode(Integer versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}