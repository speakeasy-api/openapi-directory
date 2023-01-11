package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelatedVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetRelatedVideosFilterEnum filter;
    public GetRelatedVideosQueryParams withFilter(GetRelatedVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetRelatedVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetRelatedVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}