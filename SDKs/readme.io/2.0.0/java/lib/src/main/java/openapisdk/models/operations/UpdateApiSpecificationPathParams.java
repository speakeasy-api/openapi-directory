package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiSpecificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateApiSpecificationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}