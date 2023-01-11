package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudfunctionsProjectsLocationsFunctionsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}