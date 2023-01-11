package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DnsManagedZonesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}