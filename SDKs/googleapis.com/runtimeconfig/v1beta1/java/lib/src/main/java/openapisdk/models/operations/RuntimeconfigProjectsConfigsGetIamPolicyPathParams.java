package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public RuntimeconfigProjectsConfigsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}