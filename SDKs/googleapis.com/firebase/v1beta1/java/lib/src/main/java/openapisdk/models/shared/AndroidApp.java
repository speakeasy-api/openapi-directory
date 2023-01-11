package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidApp
 * Details of a Firebase App for Android.
**/
public class AndroidApp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyId")
    public String apiKeyId;
    public AndroidApp withApiKeyId(String apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public AndroidApp withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AndroidApp withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AndroidApp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public AndroidApp withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public AndroidApp withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Hashes")
    public String[] sha1Hashes;
    public AndroidApp withSha1Hashes(String[] sha1Hashes) {
        this.sha1Hashes = sha1Hashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Hashes")
    public String[] sha256Hashes;
    public AndroidApp withSha256Hashes(String[] sha256Hashes) {
        this.sha256Hashes = sha256Hashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AndroidAppStateEnum state;
    public AndroidApp withState(AndroidAppStateEnum state) {
        this.state = state;
        return this;
    }
}