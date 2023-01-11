package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VmmigrationProjectsLocationsSourcesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}