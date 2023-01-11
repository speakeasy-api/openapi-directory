package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetUserByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}