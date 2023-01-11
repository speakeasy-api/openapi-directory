package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimilarDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetSimilarDocumentsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetSimilarDocumentsWithEnum[] with;
    public GetSimilarDocumentsQueryParams withWith(GetSimilarDocumentsWithEnum[] with) {
        this.with = with;
        return this;
    }
}