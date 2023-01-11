package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelfHostedRunnersForRepo200ApplicationJson {
    @JsonProperty("runners")
    public openapisdk.models.shared.Runner[] runners;
    public ActionsListSelfHostedRunnersForRepo200ApplicationJson withRunners(openapisdk.models.shared.Runner[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListSelfHostedRunnersForRepo200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}