package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetImageCollectionItemsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetImageCollectionItemsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=share_code")
    public String shareCode;
    public GetImageCollectionItemsQueryParams withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetImageCollectionItemsSortEnum sort;
    public GetImageCollectionItemsQueryParams withSort(GetImageCollectionItemsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}