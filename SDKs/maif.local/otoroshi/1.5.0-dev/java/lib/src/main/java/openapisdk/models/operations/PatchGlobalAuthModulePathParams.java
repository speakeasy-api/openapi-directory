package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGlobalAuthModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchGlobalAuthModulePathParams withId(String id) {
        this.id = id;
        return this;
    }
}