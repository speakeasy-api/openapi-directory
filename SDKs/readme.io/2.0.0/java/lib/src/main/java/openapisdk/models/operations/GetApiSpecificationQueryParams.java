package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiSpecificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetApiSpecificationQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetApiSpecificationQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}