package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ClouddeployProjectsLocationsTargetsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}