package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalScheduledPaymentConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateInternationalScheduledPaymentConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalScheduledConsent5 obWriteInternationalScheduledConsent5;
    public CreateInternationalScheduledPaymentConsentsRequests withObWriteInternationalScheduledConsent5(openapisdk.models.shared.ObWriteInternationalScheduledConsent5 obWriteInternationalScheduledConsent5) {
        this.obWriteInternationalScheduledConsent5 = obWriteInternationalScheduledConsent5;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalScheduledConsent5 obWriteInternationalScheduledConsent6;
    public CreateInternationalScheduledPaymentConsentsRequests withObWriteInternationalScheduledConsent6(openapisdk.models.shared.ObWriteInternationalScheduledConsent5 obWriteInternationalScheduledConsent6) {
        this.obWriteInternationalScheduledConsent6 = obWriteInternationalScheduledConsent6;
        return this;
    }
}