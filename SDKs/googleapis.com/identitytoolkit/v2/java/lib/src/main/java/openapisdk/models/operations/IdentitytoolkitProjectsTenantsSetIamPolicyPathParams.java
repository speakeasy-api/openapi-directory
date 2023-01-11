package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IdentitytoolkitProjectsTenantsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}