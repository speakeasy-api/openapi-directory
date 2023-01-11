package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigeeregistryProjectsLocationsApisVersionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}