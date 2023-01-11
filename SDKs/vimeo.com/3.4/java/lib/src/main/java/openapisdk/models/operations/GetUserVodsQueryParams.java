package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserVodsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetUserVodsDirectionEnum direction;
    public GetUserVodsQueryParams withDirection(GetUserVodsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetUserVodsFilterEnum filter;
    public GetUserVodsQueryParams withFilter(GetUserVodsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetUserVodsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetUserVodsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUserVodsSortEnum sort;
    public GetUserVodsQueryParams withSort(GetUserVodsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}