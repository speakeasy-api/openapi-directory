package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}