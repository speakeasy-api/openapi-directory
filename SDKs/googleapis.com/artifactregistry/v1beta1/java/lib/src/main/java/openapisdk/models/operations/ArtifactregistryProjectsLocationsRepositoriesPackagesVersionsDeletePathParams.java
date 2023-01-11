package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}