package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public DeleteQuoteQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}