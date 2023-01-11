package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ClouddeployProjectsLocationsTargetsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}