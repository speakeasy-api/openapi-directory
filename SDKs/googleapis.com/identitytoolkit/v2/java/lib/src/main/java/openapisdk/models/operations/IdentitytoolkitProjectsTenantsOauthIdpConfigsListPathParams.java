package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}