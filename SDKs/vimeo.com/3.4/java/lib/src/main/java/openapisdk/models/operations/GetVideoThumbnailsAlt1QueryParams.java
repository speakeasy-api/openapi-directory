package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoThumbnailsAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoThumbnailsAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoThumbnailsAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}