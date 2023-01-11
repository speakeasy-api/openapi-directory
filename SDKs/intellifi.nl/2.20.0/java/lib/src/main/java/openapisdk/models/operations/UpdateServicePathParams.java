package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateServicePathParams withId(String id) {
        this.id = id;
        return this;
    }
}