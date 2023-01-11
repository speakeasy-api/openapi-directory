package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesDisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasedatabaseProjectsLocationsInstancesDisablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}