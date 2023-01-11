package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetVideoCollectionItemsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetVideoCollectionItemsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=share_code")
    public String shareCode;
    public GetVideoCollectionItemsQueryParams withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVideoCollectionItemsSortEnum sort;
    public GetVideoCollectionItemsQueryParams withSort(GetVideoCollectionItemsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}