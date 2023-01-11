package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content-type")
    public GetContentTypeEnum contentType;
    public GetQueryParams withContentType(GetContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hypermedia")
    public GetHypermediaEnum hypermedia;
    public GetQueryParams withHypermedia(GetHypermediaEnum hypermedia) {
        this.hypermedia = hypermedia;
        return this;
    }
}