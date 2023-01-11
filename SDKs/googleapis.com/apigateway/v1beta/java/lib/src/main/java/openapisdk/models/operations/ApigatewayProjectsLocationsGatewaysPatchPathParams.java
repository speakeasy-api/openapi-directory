package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigatewayProjectsLocationsGatewaysPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}