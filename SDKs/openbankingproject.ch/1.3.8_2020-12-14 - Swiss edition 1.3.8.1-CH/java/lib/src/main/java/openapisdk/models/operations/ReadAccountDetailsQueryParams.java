package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadAccountDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=withBalance")
    public Boolean withBalance;
    public ReadAccountDetailsQueryParams withWithBalance(Boolean withBalance) {
        this.withBalance = withBalance;
        return this;
    }
}