package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public GetPoliciesQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}