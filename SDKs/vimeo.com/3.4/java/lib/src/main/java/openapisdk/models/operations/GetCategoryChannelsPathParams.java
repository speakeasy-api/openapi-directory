package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryChannelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public GetCategoryChannelsPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
}