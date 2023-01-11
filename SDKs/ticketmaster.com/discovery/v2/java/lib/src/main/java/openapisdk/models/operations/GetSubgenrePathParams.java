package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubgenrePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSubgenrePathParams withId(String id) {
        this.id = id;
        return this;
    }
}