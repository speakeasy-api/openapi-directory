package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatafusionProjectsLocationsVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}