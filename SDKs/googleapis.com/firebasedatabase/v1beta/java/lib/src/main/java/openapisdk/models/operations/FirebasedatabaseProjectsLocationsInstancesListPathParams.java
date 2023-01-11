package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasedatabaseProjectsLocationsInstancesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}