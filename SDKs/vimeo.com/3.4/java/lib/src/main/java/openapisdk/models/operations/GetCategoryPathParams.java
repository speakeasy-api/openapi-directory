package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public GetCategoryPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
}