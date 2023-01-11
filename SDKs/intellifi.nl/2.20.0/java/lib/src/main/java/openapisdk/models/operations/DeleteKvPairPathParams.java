package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKvPairPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteKvPairPathParams withId(String id) {
        this.id = id;
        return this;
    }
}