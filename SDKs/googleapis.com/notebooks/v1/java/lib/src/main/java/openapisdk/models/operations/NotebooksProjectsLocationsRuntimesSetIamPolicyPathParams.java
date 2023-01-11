package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}