package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackPathParams withName(String name) {
        this.name = name;
        return this;
    }
}