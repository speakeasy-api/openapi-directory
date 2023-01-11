package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserVodsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetUserVodsAlt1DirectionEnum direction;
    public GetUserVodsAlt1QueryParams withDirection(GetUserVodsAlt1DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetUserVodsAlt1FilterEnum filter;
    public GetUserVodsAlt1QueryParams withFilter(GetUserVodsAlt1FilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetUserVodsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetUserVodsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUserVodsAlt1SortEnum sort;
    public GetUserVodsAlt1QueryParams withSort(GetUserVodsAlt1SortEnum sort) {
        this.sort = sort;
        return this;
    }
}