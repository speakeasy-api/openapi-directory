package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ConnectorsProjectsLocationsConnectionsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}