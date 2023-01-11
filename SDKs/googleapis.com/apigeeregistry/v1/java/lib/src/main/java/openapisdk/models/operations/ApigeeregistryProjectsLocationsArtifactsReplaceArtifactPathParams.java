package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactPathParams withName(String name) {
        this.name = name;
        return this;
    }
}