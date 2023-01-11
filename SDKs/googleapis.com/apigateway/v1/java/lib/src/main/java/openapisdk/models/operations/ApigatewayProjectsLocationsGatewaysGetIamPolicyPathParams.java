package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}