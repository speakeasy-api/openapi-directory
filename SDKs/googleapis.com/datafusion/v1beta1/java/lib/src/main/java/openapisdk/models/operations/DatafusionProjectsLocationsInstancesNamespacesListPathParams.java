package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesNamespacesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatafusionProjectsLocationsInstancesNamespacesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}