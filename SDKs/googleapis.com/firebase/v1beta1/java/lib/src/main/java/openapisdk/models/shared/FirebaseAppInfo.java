package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirebaseAppInfo
 * A high-level summary of an App.
**/
public class FirebaseAppInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyId")
    public String apiKeyId;
    public FirebaseAppInfo withApiKeyId(String apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public FirebaseAppInfo withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FirebaseAppInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FirebaseAppInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public FirebaseAppInfo withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public FirebaseAppInfoPlatformEnum platform;
    public FirebaseAppInfo withPlatform(FirebaseAppInfoPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FirebaseAppInfoStateEnum state;
    public FirebaseAppInfo withState(FirebaseAppInfoStateEnum state) {
        this.state = state;
        return this;
    }
}