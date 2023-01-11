package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysProjectsLocationsKeysUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApikeysProjectsLocationsKeysUndeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}