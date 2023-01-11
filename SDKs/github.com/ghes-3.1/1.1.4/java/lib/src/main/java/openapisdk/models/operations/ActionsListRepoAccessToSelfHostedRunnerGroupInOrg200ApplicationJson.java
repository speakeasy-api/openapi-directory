package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson {
    @JsonProperty("repositories")
    public openapisdk.models.shared.Repository[] repositories;
    public ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson withRepositories(openapisdk.models.shared.Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}