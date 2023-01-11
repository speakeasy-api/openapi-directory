package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresenceByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPresenceByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}