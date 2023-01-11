package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetActivitiesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetActivitiesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}