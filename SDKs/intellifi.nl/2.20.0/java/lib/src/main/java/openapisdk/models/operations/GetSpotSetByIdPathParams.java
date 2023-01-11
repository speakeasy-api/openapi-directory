package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSpotSetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSpotSetByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=setId")
    public String setId;
    public GetSpotSetByIdPathParams withSetId(String setId) {
        this.setId = setId;
        return this;
    }
}