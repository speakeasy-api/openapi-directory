package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ConnectorsProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}