package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetGithubActionsPermissionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsSetGithubActionsPermissionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}