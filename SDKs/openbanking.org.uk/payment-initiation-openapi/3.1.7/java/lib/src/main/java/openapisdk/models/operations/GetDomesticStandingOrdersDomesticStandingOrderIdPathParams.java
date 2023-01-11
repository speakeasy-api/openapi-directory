package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticStandingOrdersDomesticStandingOrderIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomesticStandingOrderId")
    public String domesticStandingOrderId;
    public GetDomesticStandingOrdersDomesticStandingOrderIdPathParams withDomesticStandingOrderId(String domesticStandingOrderId) {
        this.domesticStandingOrderId = domesticStandingOrderId;
        return this;
    }
}