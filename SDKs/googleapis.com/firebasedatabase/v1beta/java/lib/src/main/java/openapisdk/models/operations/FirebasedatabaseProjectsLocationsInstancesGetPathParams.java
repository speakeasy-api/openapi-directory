package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasedatabaseProjectsLocationsInstancesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}