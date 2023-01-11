package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public GkehubProjectsLocationsMembershipsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}