package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetPlaylistsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPlaylistsSortEnum sort;
    public GetPlaylistsQueryParams withSort(GetPlaylistsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}