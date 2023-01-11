package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsPolicySetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BinaryauthorizationProjectsPolicySetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}