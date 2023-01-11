package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGlobalAuthModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteGlobalAuthModulePathParams withId(String id) {
        this.id = id;
        return this;
    }
}