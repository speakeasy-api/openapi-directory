package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ArtifactregistryProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}