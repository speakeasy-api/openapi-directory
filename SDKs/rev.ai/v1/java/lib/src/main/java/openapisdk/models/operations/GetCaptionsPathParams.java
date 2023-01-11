package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCaptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCaptionsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}