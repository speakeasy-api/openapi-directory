package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionNumber")
    public String transactionNumber;
    public UpdateTransactionPathParams withTransactionNumber(String transactionNumber) {
        this.transactionNumber = transactionNumber;
        return this;
    }
}