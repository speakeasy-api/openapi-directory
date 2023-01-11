package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}