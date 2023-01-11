package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomesticPaymentId")
    public String domesticPaymentId;
    public GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams withDomesticPaymentId(String domesticPaymentId) {
        this.domesticPaymentId = domesticPaymentId;
        return this;
    }
}