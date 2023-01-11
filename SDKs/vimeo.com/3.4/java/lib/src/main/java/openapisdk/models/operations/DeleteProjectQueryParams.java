package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=should_delete_clips")
    public Boolean shouldDeleteClips;
    public DeleteProjectQueryParams withShouldDeleteClips(Boolean shouldDeleteClips) {
        this.shouldDeleteClips = shouldDeleteClips;
        return this;
    }
}