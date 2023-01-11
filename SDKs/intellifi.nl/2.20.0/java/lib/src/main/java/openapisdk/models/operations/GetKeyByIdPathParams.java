package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeyByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetKeyByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}