package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}