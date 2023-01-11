package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommentAlt1Request {
    public CreateCommentAlt1PathParams pathParams;
    public CreateCommentAlt1Request withPathParams(CreateCommentAlt1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.comment+json")
    public CreateCommentAlt1RequestBody request;
    public CreateCommentAlt1Request withRequest(CreateCommentAlt1RequestBody request) {
        this.request = request;
        return this;
    }
    public CreateCommentAlt1Security security;
    public CreateCommentAlt1Request withSecurity(CreateCommentAlt1Security security) {
        this.security = security;
        return this;
    }
}