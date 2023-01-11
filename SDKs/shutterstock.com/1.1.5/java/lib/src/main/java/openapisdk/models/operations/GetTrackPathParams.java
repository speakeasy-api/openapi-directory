package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetTrackPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}