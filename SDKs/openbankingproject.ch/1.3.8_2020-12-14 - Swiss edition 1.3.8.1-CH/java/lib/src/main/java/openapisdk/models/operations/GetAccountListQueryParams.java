package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=withBalance")
    public Boolean withBalance;
    public GetAccountListQueryParams withWithBalance(Boolean withBalance) {
        this.withBalance = withBalance;
        return this;
    }
}