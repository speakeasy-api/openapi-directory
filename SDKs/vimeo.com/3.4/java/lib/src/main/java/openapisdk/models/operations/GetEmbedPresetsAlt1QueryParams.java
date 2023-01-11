package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmbedPresetsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetEmbedPresetsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetEmbedPresetsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}