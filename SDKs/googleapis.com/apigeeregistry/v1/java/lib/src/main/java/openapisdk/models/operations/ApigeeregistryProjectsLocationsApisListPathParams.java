package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigeeregistryProjectsLocationsApisListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}