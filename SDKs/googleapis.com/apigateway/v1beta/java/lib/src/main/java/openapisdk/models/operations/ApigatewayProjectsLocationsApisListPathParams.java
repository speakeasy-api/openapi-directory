package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsApisListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigatewayProjectsLocationsApisListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}