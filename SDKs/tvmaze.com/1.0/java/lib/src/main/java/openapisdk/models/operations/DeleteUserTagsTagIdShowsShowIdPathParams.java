package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserTagsTagIdShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public DeleteUserTagsTagIdShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public Long tagId;
    public DeleteUserTagsTagIdShowsShowIdPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}