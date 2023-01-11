package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomesticStandingOrderId")
    public String domesticStandingOrderId;
    public GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams withDomesticStandingOrderId(String domesticStandingOrderId) {
        this.domesticStandingOrderId = domesticStandingOrderId;
        return this;
    }
}