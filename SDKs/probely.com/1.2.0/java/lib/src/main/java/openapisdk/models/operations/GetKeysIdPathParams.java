package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetKeysIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}