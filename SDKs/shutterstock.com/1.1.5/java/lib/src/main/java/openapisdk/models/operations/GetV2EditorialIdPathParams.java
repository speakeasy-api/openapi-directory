package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV2EditorialIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetV2EditorialIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}