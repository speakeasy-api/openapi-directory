package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsArtifactsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigeeregistryProjectsLocationsArtifactsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}