package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClicksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=continueFrom")
    public String continueFrom;
    public GetClicksQueryParams withContinueFrom(String continueFrom) {
        this.continueFrom = continueFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetClicksQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}