package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalPaymentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateInternationalPaymentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternational3 obWriteInternational3;
    public CreateInternationalPaymentsRequests withObWriteInternational3(openapisdk.models.shared.ObWriteInternational3 obWriteInternational3) {
        this.obWriteInternational3 = obWriteInternational3;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternational3 obWriteInternational4;
    public CreateInternationalPaymentsRequests withObWriteInternational4(openapisdk.models.shared.ObWriteInternational3 obWriteInternational4) {
        this.obWriteInternational4 = obWriteInternational4;
        return this;
    }
}