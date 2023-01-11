package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}