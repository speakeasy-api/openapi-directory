package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ComposerProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}