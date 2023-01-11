package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialLivefeedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEditorialLivefeedPathParams withId(String id) {
        this.id = id;
        return this;
    }
}