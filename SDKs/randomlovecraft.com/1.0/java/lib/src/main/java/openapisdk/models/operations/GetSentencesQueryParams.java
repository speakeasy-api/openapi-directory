package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSentencesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSentencesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}