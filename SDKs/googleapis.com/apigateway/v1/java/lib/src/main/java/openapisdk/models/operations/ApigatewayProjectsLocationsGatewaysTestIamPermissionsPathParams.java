package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}