package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetOrgSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsGetOrgSecretPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsGetOrgSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}