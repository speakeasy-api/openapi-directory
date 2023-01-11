package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePaymentsFilePaymentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FilePaymentId")
    public String filePaymentId;
    public GetFilePaymentsFilePaymentIdPathParams withFilePaymentId(String filePaymentId) {
        this.filePaymentId = filePaymentId;
        return this;
    }
}