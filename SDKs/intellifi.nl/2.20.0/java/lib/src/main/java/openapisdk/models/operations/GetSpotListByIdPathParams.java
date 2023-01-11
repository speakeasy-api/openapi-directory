package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSpotListByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSpotListByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}