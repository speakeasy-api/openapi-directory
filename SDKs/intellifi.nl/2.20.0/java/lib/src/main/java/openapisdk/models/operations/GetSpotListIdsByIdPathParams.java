package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSpotListIdsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSpotListIdsByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}