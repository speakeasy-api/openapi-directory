package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GkehubProjectsLocationsMembershipsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}