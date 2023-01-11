package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasedatabaseProjectsLocationsInstancesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}