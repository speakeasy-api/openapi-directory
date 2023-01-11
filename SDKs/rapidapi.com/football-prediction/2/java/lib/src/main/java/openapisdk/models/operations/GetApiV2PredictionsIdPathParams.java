package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV2PredictionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetApiV2PredictionsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}