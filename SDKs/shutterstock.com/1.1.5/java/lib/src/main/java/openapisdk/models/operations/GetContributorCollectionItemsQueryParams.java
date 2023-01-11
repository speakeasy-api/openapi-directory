package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetContributorCollectionItemsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetContributorCollectionItemsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetContributorCollectionItemsSortEnum sort;
    public GetContributorCollectionItemsQueryParams withSort(GetContributorCollectionItemsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}