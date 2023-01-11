package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPolicyModuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public GetPolicyModuleQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}