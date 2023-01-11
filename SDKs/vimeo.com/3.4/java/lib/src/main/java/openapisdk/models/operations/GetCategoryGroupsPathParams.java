package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public GetCategoryGroupsPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
}