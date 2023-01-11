package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePaymentsFilePaymentIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FilePaymentId")
    public String filePaymentId;
    public GetFilePaymentsFilePaymentIdPaymentDetailsPathParams withFilePaymentId(String filePaymentId) {
        this.filePaymentId = filePaymentId;
        return this;
    }
}