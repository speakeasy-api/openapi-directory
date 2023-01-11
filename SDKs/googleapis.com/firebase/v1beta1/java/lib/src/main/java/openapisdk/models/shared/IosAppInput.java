package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosAppInput
 * Details of a Firebase App for iOS.
**/
public class IosAppInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyId")
    public String apiKeyId;
    public IosAppInput withApiKeyId(String apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStoreId")
    public String appStoreId;
    public IosAppInput withAppStoreId(String appStoreId) {
        this.appStoreId = appStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public IosAppInput withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public IosAppInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IosAppInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamId")
    public String teamId;
    public IosAppInput withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}