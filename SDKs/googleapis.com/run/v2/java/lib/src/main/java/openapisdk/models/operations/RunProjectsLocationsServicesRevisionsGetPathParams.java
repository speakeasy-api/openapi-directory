package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesRevisionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RunProjectsLocationsServicesRevisionsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}