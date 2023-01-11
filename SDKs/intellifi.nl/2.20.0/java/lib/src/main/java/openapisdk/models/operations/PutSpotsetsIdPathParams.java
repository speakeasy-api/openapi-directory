package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSpotsetsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSpotsetsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}