package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitPayoutV3Requests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePayoutRequestV3 createPayoutRequestV3;
    public SubmitPayoutV3Requests withCreatePayoutRequestV3(openapisdk.models.shared.CreatePayoutRequestV3 createPayoutRequestV3) {
        this.createPayoutRequestV3 = createPayoutRequestV3;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SubmitPayoutV3MultipartFormData object;
    public SubmitPayoutV3Requests withObject(SubmitPayoutV3MultipartFormData object) {
        this.object = object;
        return this;
    }
}