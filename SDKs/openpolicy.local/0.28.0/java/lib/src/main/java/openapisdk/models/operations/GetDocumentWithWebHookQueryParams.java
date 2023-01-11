package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentWithWebHookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public GetDocumentWithWebHookQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}