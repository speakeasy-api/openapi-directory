package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserTagsTagIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public Long tagId;
    public DeleteUserTagsTagIdPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}