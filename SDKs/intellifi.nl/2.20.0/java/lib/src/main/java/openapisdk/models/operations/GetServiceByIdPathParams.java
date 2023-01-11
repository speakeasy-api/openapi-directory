package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetServiceByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}