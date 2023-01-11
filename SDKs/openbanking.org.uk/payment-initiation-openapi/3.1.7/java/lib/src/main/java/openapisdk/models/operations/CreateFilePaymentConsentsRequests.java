package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilePaymentConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateFilePaymentConsentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteFileConsent3 obWriteFileConsent3;
    public CreateFilePaymentConsentsRequests withObWriteFileConsent3(openapisdk.models.shared.ObWriteFileConsent3 obWriteFileConsent3) {
        this.obWriteFileConsent3 = obWriteFileConsent3;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteFileConsent3 obWriteFileConsent4;
    public CreateFilePaymentConsentsRequests withObWriteFileConsent4(openapisdk.models.shared.ObWriteFileConsent3 obWriteFileConsent4) {
        this.obWriteFileConsent4 = obWriteFileConsent4;
        return this;
    }
}