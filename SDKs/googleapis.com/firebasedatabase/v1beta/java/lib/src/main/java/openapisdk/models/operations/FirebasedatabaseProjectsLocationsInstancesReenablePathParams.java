package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesReenablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasedatabaseProjectsLocationsInstancesReenablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}