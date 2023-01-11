package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEventByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}