package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}