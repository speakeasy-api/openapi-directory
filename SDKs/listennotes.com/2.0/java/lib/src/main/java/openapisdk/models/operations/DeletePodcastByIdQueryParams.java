package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePodcastByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reason")
    public String reason;
    public DeletePodcastByIdQueryParams withReason(String reason) {
        this.reason = reason;
        return this;
    }
}