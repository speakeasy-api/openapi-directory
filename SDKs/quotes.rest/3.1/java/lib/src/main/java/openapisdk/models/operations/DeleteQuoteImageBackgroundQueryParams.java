package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteImageBackgroundQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public DeleteQuoteImageBackgroundQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}