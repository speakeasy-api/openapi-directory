package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiStatusAppVersion {
    @JsonProperty("latest_app_version")
    public Long latestAppVersion;
    public ApiStatusAppVersion withLatestAppVersion(Long latestAppVersion) {
        this.latestAppVersion = latestAppVersion;
        return this;
    }
    @JsonProperty("min_app_version")
    public Long minAppVersion;
    public ApiStatusAppVersion withMinAppVersion(Long minAppVersion) {
        this.minAppVersion = minAppVersion;
        return this;
    }
}