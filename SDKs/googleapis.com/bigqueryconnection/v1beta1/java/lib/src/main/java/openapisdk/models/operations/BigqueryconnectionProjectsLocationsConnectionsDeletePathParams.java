package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BigqueryconnectionProjectsLocationsConnectionsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}