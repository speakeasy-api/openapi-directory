package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticStandingOrderConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateDomesticStandingOrderConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticStandingOrderConsent5 obWriteDomesticStandingOrderConsent5;
    public CreateDomesticStandingOrderConsentsRequests withObWriteDomesticStandingOrderConsent5(openapisdk.models.shared.ObWriteDomesticStandingOrderConsent5 obWriteDomesticStandingOrderConsent5) {
        this.obWriteDomesticStandingOrderConsent5 = obWriteDomesticStandingOrderConsent5;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticStandingOrderConsent5 obWriteDomesticStandingOrderConsent6;
    public CreateDomesticStandingOrderConsentsRequests withObWriteDomesticStandingOrderConsent6(openapisdk.models.shared.ObWriteDomesticStandingOrderConsent5 obWriteDomesticStandingOrderConsent6) {
        this.obWriteDomesticStandingOrderConsent6 = obWriteDomesticStandingOrderConsent6;
        return this;
    }
}