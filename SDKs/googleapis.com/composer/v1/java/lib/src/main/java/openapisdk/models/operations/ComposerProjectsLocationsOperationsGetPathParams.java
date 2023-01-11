package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ComposerProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}