package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsInstancesInventoriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsLocationsInstancesInventoriesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}