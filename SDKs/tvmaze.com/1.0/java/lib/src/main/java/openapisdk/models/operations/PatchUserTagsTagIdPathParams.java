package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserTagsTagIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public Long tagId;
    public PatchUserTagsTagIdPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}