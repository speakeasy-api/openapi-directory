package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSimpleQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public PostSimpleQueryQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}