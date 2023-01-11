package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}