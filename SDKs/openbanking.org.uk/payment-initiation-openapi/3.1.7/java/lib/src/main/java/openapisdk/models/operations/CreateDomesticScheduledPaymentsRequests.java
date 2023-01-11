package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticScheduledPaymentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateDomesticScheduledPaymentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticScheduled2 obWriteDomesticScheduled2;
    public CreateDomesticScheduledPaymentsRequests withObWriteDomesticScheduled2(openapisdk.models.shared.ObWriteDomesticScheduled2 obWriteDomesticScheduled2) {
        this.obWriteDomesticScheduled2 = obWriteDomesticScheduled2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomesticScheduled2 obWriteDomesticScheduled3;
    public CreateDomesticScheduledPaymentsRequests withObWriteDomesticScheduled3(openapisdk.models.shared.ObWriteDomesticScheduled2 obWriteDomesticScheduled3) {
        this.obWriteDomesticScheduled3 = obWriteDomesticScheduled3;
        return this;
    }
}