package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSentencesFromBookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSentencesFromBookQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}