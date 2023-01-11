package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ComposerProjectsLocationsEnvironmentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}