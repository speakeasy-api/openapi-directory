package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserTagsTagIdShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public PutUserTagsTagIdShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_id")
    public Long tagId;
    public PutUserTagsTagIdShowsShowIdPathParams withTagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }
}