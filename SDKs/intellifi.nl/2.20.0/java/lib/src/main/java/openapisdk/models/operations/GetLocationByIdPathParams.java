package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetLocationByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}