package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalScheduledPaymentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateInternationalScheduledPaymentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalScheduled3 obWriteInternationalScheduled3;
    public CreateInternationalScheduledPaymentsRequests withObWriteInternationalScheduled3(openapisdk.models.shared.ObWriteInternationalScheduled3 obWriteInternationalScheduled3) {
        this.obWriteInternationalScheduled3 = obWriteInternationalScheduled3;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteInternationalScheduled3 obWriteInternationalScheduled4;
    public CreateInternationalScheduledPaymentsRequests withObWriteInternationalScheduled4(openapisdk.models.shared.ObWriteInternationalScheduled3 obWriteInternationalScheduled4) {
        this.obWriteInternationalScheduled4 = obWriteInternationalScheduled4;
        return this;
    }
}