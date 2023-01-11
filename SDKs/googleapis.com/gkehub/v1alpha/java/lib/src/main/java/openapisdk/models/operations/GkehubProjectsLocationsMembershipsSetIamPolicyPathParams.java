package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GkehubProjectsLocationsMembershipsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}