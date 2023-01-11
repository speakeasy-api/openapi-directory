package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsGatewaysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigatewayProjectsLocationsGatewaysListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}