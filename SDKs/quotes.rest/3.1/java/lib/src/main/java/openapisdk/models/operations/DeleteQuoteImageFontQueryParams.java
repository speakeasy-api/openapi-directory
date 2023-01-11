package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteImageFontQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public DeleteQuoteImageFontQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}