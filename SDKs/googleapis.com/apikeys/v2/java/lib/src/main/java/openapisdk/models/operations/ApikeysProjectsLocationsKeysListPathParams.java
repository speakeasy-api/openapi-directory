package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysProjectsLocationsKeysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApikeysProjectsLocationsKeysListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}