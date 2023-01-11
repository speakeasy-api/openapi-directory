package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsPlaylistIdRepostersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetPlaylistsPlaylistIdRepostersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}