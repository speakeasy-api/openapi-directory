package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilePaymentConsentsConsentIdFileRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateFilePaymentConsentsConsentIdFileRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> file;
    public CreateFilePaymentConsentsConsentIdFileRequests withFile(java.util.Map<String, Object> file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> file1;
    public CreateFilePaymentConsentsConsentIdFileRequests withFile1(java.util.Map<String, Object> file1) {
        this.file1 = file1;
        return this;
    }
}