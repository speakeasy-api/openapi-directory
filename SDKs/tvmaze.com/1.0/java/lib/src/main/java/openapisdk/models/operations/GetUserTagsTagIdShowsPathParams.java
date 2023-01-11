package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserTagsTagIdShowsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public Long tagId;
    public GetUserTagsTagIdShowsPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}