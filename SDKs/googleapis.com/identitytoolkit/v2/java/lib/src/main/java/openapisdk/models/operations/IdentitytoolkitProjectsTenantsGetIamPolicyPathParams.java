package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IdentitytoolkitProjectsTenantsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}