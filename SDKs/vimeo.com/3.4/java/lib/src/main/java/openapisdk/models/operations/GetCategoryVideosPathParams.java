package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public GetCategoryVideosPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
}