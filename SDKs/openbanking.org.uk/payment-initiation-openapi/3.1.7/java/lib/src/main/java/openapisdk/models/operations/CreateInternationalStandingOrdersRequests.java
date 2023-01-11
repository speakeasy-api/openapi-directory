package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalStandingOrdersRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateInternationalStandingOrdersRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalStandingOrder4 obWriteInternationalStandingOrder4;
    public CreateInternationalStandingOrdersRequests withObWriteInternationalStandingOrder4(openapisdk.models.shared.ObWriteInternationalStandingOrder4 obWriteInternationalStandingOrder4) {
        this.obWriteInternationalStandingOrder4 = obWriteInternationalStandingOrder4;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalStandingOrder4 obWriteInternationalStandingOrder5;
    public CreateInternationalStandingOrdersRequests withObWriteInternationalStandingOrder5(openapisdk.models.shared.ObWriteInternationalStandingOrder4 obWriteInternationalStandingOrder5) {
        this.obWriteInternationalStandingOrder5 = obWriteInternationalStandingOrder5;
        return this;
    }
}