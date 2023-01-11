package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialLivefeedItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEditorialLivefeedItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}