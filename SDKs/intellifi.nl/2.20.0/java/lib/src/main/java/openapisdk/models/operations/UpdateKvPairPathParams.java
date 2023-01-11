package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKvPairPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateKvPairPathParams withId(String id) {
        this.id = id;
        return this;
    }
}