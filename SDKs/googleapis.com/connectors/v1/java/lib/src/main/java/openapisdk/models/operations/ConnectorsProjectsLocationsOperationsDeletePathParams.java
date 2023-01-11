package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ConnectorsProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}