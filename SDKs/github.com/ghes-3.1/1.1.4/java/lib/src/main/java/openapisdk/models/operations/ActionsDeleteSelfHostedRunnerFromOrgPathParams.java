package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDeleteSelfHostedRunnerFromOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsDeleteSelfHostedRunnerFromOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public ActionsDeleteSelfHostedRunnerFromOrgPathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}