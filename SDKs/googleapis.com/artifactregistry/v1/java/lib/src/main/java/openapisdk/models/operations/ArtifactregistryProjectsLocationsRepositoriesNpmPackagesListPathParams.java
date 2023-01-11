package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}