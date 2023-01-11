package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ComposerProjectsLocationsEnvironmentsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}