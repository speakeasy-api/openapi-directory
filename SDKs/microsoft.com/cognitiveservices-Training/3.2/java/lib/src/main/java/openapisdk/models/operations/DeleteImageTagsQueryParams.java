package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageIds")
    public String[] imageIds;
    public DeleteImageTagsQueryParams withImageIds(String[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tagIds")
    public String[] tagIds;
    public DeleteImageTagsQueryParams withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}