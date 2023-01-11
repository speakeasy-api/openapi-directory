package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeedAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetFeedAlt1QueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetFeedAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetFeedAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetFeedAlt1TypeEnum type;
    public GetFeedAlt1QueryParams withType(GetFeedAlt1TypeEnum type) {
        this.type = type;
        return this;
    }
}