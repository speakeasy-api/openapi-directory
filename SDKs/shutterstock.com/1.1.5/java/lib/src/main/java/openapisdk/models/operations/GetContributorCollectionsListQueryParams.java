package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorCollectionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetContributorCollectionsListSortEnum sort;
    public GetContributorCollectionsListQueryParams withSort(GetContributorCollectionsListSortEnum sort) {
        this.sort = sort;
        return this;
    }
}