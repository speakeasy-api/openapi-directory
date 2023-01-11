package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=should_delete_clips")
    public Boolean shouldDeleteClips;
    public DeleteProjectAlt1QueryParams withShouldDeleteClips(Boolean shouldDeleteClips) {
        this.shouldDeleteClips = shouldDeleteClips;
        return this;
    }
}