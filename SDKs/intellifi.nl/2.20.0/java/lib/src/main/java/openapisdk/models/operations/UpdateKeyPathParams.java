package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateKeyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}