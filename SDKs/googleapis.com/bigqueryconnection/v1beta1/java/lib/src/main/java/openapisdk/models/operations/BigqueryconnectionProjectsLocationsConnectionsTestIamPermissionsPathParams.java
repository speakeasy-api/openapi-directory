package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}