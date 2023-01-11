package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEventPathParams withId(String id) {
        this.id = id;
        return this;
    }
}