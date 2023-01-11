package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}