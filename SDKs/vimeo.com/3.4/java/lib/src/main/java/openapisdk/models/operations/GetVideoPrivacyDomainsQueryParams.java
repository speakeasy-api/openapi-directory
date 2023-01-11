package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoPrivacyDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoPrivacyDomainsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoPrivacyDomainsQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}