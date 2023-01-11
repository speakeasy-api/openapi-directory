package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}