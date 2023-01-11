package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalStandingOrderConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateInternationalStandingOrderConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalStandingOrderConsent6 obWriteInternationalStandingOrderConsent6;
    public CreateInternationalStandingOrderConsentsRequests withObWriteInternationalStandingOrderConsent6(openapisdk.models.shared.ObWriteInternationalStandingOrderConsent6 obWriteInternationalStandingOrderConsent6) {
        this.obWriteInternationalStandingOrderConsent6 = obWriteInternationalStandingOrderConsent6;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalStandingOrderConsent6 obWriteInternationalStandingOrderConsent7;
    public CreateInternationalStandingOrderConsentsRequests withObWriteInternationalStandingOrderConsent7(openapisdk.models.shared.ObWriteInternationalStandingOrderConsent6 obWriteInternationalStandingOrderConsent7) {
        this.obWriteInternationalStandingOrderConsent7 = obWriteInternationalStandingOrderConsent7;
        return this;
    }
}