package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams withName(String name) {
        this.name = name;
        return this;
    }
}