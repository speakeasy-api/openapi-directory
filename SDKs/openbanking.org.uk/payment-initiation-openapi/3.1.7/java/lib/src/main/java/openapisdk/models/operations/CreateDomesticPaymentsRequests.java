package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticPaymentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/jose+jwe")
    public byte[] applicationJosePlusJwe;
    public CreateDomesticPaymentsRequests withApplicationJosePlusJwe(byte[] applicationJosePlusJwe) {
        this.applicationJosePlusJwe = applicationJosePlusJwe;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomestic2 obWriteDomestic2;
    public CreateDomesticPaymentsRequests withObWriteDomestic2(openapisdk.models.shared.ObWriteDomestic2 obWriteDomestic2) {
        this.obWriteDomestic2 = obWriteDomestic2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObWriteDomestic2 obWriteDomestic3;
    public CreateDomesticPaymentsRequests withObWriteDomestic3(openapisdk.models.shared.ObWriteDomestic2 obWriteDomestic3) {
        this.obWriteDomestic3 = obWriteDomestic3;
        return this;
    }
}