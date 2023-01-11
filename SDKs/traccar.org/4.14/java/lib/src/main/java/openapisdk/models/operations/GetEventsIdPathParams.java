package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetEventsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}