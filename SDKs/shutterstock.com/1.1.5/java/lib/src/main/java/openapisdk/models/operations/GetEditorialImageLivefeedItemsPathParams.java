package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialImageLivefeedItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEditorialImageLivefeedItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}