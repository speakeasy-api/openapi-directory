package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PollingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnostics")
    public Diagnostic[] diagnostics;
    public PollingOptions withDiagnostics(Diagnostic[] diagnostics) {
        this.diagnostics = diagnostics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failCondition")
    public String failCondition;
    public PollingOptions withFailCondition(String failCondition) {
        this.failCondition = failCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finishCondition")
    public String finishCondition;
    public PollingOptions withFinishCondition(String finishCondition) {
        this.finishCondition = finishCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pollingLink")
    public String pollingLink;
    public PollingOptions withPollingLink(String pollingLink) {
        this.pollingLink = pollingLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetLink")
    public String targetLink;
    public PollingOptions withTargetLink(String targetLink) {
        this.targetLink = targetLink;
        return this;
    }
}