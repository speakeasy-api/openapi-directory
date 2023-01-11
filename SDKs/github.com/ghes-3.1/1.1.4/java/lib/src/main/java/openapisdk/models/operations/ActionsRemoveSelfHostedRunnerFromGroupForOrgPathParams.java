package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}