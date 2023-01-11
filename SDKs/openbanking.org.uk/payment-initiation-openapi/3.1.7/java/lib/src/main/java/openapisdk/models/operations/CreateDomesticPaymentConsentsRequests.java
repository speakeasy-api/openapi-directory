package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticPaymentConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateDomesticPaymentConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticConsent4 obWriteDomesticConsent4;
    public CreateDomesticPaymentConsentsRequests withObWriteDomesticConsent4(openapisdk.models.shared.ObWriteDomesticConsent4 obWriteDomesticConsent4) {
        this.obWriteDomesticConsent4 = obWriteDomesticConsent4;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticConsent4 obWriteDomesticConsent5;
    public CreateDomesticPaymentConsentsRequests withObWriteDomesticConsent5(openapisdk.models.shared.ObWriteDomesticConsent4 obWriteDomesticConsent5) {
        this.obWriteDomesticConsent5 = obWriteDomesticConsent5;
        return this;
    }
}