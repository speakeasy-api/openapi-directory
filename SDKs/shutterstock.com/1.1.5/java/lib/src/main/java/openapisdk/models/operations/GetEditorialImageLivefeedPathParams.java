package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialImageLivefeedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEditorialImageLivefeedPathParams withId(String id) {
        this.id = id;
        return this;
    }
}