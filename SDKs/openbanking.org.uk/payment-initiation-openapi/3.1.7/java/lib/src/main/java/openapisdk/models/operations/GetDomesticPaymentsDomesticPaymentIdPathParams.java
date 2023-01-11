package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticPaymentsDomesticPaymentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomesticPaymentId")
    public String domesticPaymentId;
    public GetDomesticPaymentsDomesticPaymentIdPathParams withDomesticPaymentId(String domesticPaymentId) {
        this.domesticPaymentId = domesticPaymentId;
        return this;
    }
}