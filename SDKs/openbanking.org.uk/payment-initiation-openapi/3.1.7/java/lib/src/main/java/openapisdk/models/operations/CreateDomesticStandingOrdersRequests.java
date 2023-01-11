package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticStandingOrdersRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateDomesticStandingOrdersRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticStandingOrder3 obWriteDomesticStandingOrder3;
    public CreateDomesticStandingOrdersRequests withObWriteDomesticStandingOrder3(openapisdk.models.shared.ObWriteDomesticStandingOrder3 obWriteDomesticStandingOrder3) {
        this.obWriteDomesticStandingOrder3 = obWriteDomesticStandingOrder3;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticStandingOrder3 obWriteDomesticStandingOrder4;
    public CreateDomesticStandingOrdersRequests withObWriteDomesticStandingOrder4(openapisdk.models.shared.ObWriteDomesticStandingOrder3 obWriteDomesticStandingOrder4) {
        this.obWriteDomesticStandingOrder4 = obWriteDomesticStandingOrder4;
        return this;
    }
}