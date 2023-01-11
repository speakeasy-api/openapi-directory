package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}