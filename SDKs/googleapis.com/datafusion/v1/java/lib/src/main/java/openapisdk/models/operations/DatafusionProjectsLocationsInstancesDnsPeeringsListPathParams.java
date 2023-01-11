package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesDnsPeeringsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatafusionProjectsLocationsInstancesDnsPeeringsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}