package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetSelectedReposForOrgSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsSetSelectedReposForOrgSecretPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsSetSelectedReposForOrgSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}