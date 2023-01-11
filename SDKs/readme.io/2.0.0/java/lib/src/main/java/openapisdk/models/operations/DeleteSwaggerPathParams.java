package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSwaggerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSwaggerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}