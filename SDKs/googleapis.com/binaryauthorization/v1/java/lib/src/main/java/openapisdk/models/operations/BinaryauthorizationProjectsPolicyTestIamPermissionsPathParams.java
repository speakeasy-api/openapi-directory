package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsPolicyTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BinaryauthorizationProjectsPolicyTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}