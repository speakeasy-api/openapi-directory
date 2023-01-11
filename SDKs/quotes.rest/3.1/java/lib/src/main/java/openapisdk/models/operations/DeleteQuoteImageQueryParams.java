package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public DeleteQuoteImageQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}