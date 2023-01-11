package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysProjectsLocationsKeysCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApikeysProjectsLocationsKeysCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}