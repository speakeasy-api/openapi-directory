package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteImageBackgroundListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetQuoteImageBackgroundListQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}