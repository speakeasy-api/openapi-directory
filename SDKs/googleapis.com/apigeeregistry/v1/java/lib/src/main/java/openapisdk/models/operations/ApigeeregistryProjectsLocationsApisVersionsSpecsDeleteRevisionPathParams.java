package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionPathParams withName(String name) {
        this.name = name;
        return this;
    }
}