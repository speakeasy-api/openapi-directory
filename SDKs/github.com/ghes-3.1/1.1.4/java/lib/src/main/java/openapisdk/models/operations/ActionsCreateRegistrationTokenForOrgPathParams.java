package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateRegistrationTokenForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsCreateRegistrationTokenForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}