package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}