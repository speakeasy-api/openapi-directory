package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=binary")
    public Boolean binary;
    public GetQuoteImageQueryParams withBinary(Boolean binary) {
        this.binary = binary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetQuoteImageQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}