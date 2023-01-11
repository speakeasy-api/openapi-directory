package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTrackCollectionItemsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetTrackCollectionItemsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=share_code")
    public String shareCode;
    public GetTrackCollectionItemsQueryParams withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetTrackCollectionItemsSortEnum sort;
    public GetTrackCollectionItemsQueryParams withSort(GetTrackCollectionItemsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}