package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsApisConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigatewayProjectsLocationsApisConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}