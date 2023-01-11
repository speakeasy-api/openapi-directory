package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalPaymentConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateInternationalPaymentConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalConsent5 obWriteInternationalConsent5;
    public CreateInternationalPaymentConsentsRequests withObWriteInternationalConsent5(openapisdk.models.shared.ObWriteInternationalConsent5 obWriteInternationalConsent5) {
        this.obWriteInternationalConsent5 = obWriteInternationalConsent5;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalConsent5 obWriteInternationalConsent6;
    public CreateInternationalPaymentConsentsRequests withObWriteInternationalConsent6(openapisdk.models.shared.ObWriteInternationalConsent5 obWriteInternationalConsent6) {
        this.obWriteInternationalConsent6 = obWriteInternationalConsent6;
        return this;
    }
}