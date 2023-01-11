package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetACategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public String categoryId;
    public EndpointGetACategoryPathParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
}