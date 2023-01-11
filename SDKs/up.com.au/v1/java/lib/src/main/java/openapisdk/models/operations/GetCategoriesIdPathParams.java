package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoriesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCategoriesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}