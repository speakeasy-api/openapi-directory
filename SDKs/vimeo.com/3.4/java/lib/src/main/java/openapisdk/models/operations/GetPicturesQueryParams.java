package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPicturesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetPicturesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetPicturesQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}