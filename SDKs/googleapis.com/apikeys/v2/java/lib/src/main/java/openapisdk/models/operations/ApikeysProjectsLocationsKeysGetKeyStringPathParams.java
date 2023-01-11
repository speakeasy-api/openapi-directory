package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysProjectsLocationsKeysGetKeyStringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApikeysProjectsLocationsKeysGetKeyStringPathParams withName(String name) {
        this.name = name;
        return this;
    }
}