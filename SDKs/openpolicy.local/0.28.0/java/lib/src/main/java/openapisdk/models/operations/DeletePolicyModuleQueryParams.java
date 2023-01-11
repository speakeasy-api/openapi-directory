package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePolicyModuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public DeletePolicyModuleQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}