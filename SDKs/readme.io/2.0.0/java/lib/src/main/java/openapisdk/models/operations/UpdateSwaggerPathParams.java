package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSwaggerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateSwaggerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}