package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelfHostedRunnersForOrg200ApplicationJson {
    @JsonProperty("runners")
    public openapisdk.models.shared.Runner[] runners;
    public ActionsListSelfHostedRunnersForOrg200ApplicationJson withRunners(openapisdk.models.shared.Runner[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListSelfHostedRunnersForOrg200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}