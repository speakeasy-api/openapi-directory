package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}