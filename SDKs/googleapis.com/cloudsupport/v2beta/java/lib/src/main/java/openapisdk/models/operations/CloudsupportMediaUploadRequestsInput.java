package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportMediaUploadRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] applicationOctetStream;
    public CloudsupportMediaUploadRequestsInput withApplicationOctetStream(byte[] applicationOctetStream) {
        this.applicationOctetStream = applicationOctetStream;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAttachmentRequestInput createAttachmentRequest;
    public CloudsupportMediaUploadRequestsInput withCreateAttachmentRequest(openapisdk.models.shared.CreateAttachmentRequestInput createAttachmentRequest) {
        this.createAttachmentRequest = createAttachmentRequest;
        return this;
    }
}