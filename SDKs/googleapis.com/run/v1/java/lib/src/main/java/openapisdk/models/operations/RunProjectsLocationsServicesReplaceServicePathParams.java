package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesReplaceServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RunProjectsLocationsServicesReplaceServicePathParams withName(String name) {
        this.name = name;
        return this;
    }
}