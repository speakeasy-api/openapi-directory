package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMePlaylistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetMePlaylistsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}