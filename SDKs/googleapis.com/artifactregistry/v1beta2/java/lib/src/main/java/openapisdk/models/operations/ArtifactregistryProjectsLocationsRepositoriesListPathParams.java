package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ArtifactregistryProjectsLocationsRepositoriesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}