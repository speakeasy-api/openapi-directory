package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson {
    @JsonProperty("runner_groups")
    public openapisdk.models.shared.RunnerGroupsEnterprise[] runnerGroups;
    public EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson withRunnerGroups(openapisdk.models.shared.RunnerGroupsEnterprise[] runnerGroups) {
        this.runnerGroups = runnerGroups;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}