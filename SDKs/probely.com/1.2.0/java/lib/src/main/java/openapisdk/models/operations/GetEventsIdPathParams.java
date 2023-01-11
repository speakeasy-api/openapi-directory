package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEventsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}