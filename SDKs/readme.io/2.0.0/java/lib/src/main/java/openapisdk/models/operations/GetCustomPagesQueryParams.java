package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomPagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetCustomPagesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetCustomPagesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}