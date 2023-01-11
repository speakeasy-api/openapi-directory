package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}