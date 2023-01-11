package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}