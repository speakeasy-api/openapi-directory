package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePaymentsFilePaymentIdReportFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FilePaymentId")
    public String filePaymentId;
    public GetFilePaymentsFilePaymentIdReportFilePathParams withFilePaymentId(String filePaymentId) {
        this.filePaymentId = filePaymentId;
        return this;
    }
}