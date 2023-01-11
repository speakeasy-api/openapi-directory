package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferFundsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceAccountId")
    public String sourceAccountId;
    public TransferFundsPathParams withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
}