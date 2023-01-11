package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveStreamHealthStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationIssues")
    public LiveStreamConfigurationIssue[] configurationIssues;
    public LiveStreamHealthStatus withConfigurationIssues(LiveStreamConfigurationIssue[] configurationIssues) {
        this.configurationIssues = configurationIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateTimeSeconds")
    public String lastUpdateTimeSeconds;
    public LiveStreamHealthStatus withLastUpdateTimeSeconds(String lastUpdateTimeSeconds) {
        this.lastUpdateTimeSeconds = lastUpdateTimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LiveStreamHealthStatusStatusEnum status;
    public LiveStreamHealthStatus withStatus(LiveStreamHealthStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}