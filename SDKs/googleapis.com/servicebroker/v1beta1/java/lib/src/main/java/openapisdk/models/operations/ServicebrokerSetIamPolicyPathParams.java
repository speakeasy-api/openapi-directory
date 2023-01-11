package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicebrokerSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}