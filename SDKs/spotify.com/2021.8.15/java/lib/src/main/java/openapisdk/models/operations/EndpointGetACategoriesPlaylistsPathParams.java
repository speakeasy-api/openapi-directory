package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetACategoriesPlaylistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public String categoryId;
    public EndpointGetACategoriesPlaylistsPathParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
}