package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSpotsetsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSpotsetsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}