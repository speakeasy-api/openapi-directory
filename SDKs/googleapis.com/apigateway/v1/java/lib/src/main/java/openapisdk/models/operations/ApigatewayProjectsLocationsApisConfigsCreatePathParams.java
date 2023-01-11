package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigatewayProjectsLocationsApisConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigatewayProjectsLocationsApisConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}