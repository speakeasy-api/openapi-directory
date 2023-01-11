package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DnsManagedZonesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}