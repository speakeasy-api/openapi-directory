package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}