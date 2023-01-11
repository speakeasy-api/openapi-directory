package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutocompleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetAutocompleteQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public GetAutocompleteQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
}