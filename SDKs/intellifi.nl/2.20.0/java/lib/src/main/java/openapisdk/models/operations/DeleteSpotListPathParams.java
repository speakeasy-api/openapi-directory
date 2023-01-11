package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSpotListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSpotListPathParams withId(String id) {
        this.id = id;
        return this;
    }
}