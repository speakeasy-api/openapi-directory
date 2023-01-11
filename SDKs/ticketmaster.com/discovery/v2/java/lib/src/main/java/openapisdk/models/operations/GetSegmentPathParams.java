package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSegmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSegmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}