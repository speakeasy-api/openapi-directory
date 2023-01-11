package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RunProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}