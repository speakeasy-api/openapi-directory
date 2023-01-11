package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdRepostersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTracksTrackIdRepostersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}