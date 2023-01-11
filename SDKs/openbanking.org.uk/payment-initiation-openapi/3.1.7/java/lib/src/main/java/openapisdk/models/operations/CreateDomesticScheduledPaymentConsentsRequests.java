package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticScheduledPaymentConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateDomesticScheduledPaymentConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticScheduledConsent4 obWriteDomesticScheduledConsent4;
    public CreateDomesticScheduledPaymentConsentsRequests withObWriteDomesticScheduledConsent4(openapisdk.models.shared.ObWriteDomesticScheduledConsent4 obWriteDomesticScheduledConsent4) {
        this.obWriteDomesticScheduledConsent4 = obWriteDomesticScheduledConsent4;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticScheduledConsent4 obWriteDomesticScheduledConsent5;
    public CreateDomesticScheduledPaymentConsentsRequests withObWriteDomesticScheduledConsent5(openapisdk.models.shared.ObWriteDomesticScheduledConsent4 obWriteDomesticScheduledConsent5) {
        this.obWriteDomesticScheduledConsent5 = obWriteDomesticScheduledConsent5;
        return this;
    }
}