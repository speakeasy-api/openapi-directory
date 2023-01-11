package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsApisCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigatewayProjectsLocationsApisCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}