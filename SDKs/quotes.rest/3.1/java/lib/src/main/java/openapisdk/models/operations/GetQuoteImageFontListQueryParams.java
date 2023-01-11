package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteImageFontListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetQuoteImageFontListQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}