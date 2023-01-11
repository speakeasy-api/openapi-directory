package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}