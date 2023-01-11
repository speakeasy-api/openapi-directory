package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilePaymentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateFilePaymentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteFile2 obWriteFile2;
    public CreateFilePaymentsRequests withObWriteFile2(openapisdk.models.shared.ObWriteFile2 obWriteFile2) {
        this.obWriteFile2 = obWriteFile2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteFile2 obWriteFile3;
    public CreateFilePaymentsRequests withObWriteFile3(openapisdk.models.shared.ObWriteFile2 obWriteFile3) {
        this.obWriteFile3 = obWriteFile3;
        return this;
    }
}