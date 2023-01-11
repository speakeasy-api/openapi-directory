package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionNumber")
    public String transactionNumber;
    public GetTransactionPathParams withTransactionNumber(String transactionNumber) {
        this.transactionNumber = transactionNumber;
        return this;
    }
}