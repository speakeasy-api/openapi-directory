package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidAppInput
 * Details of a Firebase App for Android.
**/
public class AndroidAppInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyId")
    public String apiKeyId;
    public AndroidAppInput withApiKeyId(String apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AndroidAppInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AndroidAppInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public AndroidAppInput withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Hashes")
    public String[] sha1Hashes;
    public AndroidAppInput withSha1Hashes(String[] sha1Hashes) {
        this.sha1Hashes = sha1Hashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Hashes")
    public String[] sha256Hashes;
    public AndroidAppInput withSha256Hashes(String[] sha256Hashes) {
        this.sha256Hashes = sha256Hashes;
        return this;
    }
}