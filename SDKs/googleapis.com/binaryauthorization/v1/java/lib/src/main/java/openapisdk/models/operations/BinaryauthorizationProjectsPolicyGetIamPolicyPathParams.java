package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsPolicyGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BinaryauthorizationProjectsPolicyGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}