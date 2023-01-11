package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IapSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}