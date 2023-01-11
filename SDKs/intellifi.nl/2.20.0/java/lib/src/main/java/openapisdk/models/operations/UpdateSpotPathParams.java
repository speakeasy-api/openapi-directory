package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSpotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateSpotPathParams withId(String id) {
        this.id = id;
        return this;
    }
}