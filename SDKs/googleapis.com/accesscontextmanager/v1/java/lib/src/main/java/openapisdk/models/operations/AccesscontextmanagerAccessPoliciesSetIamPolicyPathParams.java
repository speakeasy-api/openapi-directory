package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}