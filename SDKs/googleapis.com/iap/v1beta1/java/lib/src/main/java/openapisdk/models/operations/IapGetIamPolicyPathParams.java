package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IapGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}