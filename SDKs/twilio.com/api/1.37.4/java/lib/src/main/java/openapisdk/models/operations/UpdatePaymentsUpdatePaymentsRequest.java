package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentsUpdatePaymentsRequest {
    @SpeakeasyMetadata("form:name=Capture")
    public openapisdk.models.shared.PaymentsEnumCaptureEnum capture;
    public UpdatePaymentsUpdatePaymentsRequest withCapture(openapisdk.models.shared.PaymentsEnumCaptureEnum capture) {
        this.capture = capture;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdempotencyKey")
    public String idempotencyKey;
    public UpdatePaymentsUpdatePaymentsRequest withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.PaymentsEnumStatusEnum status;
    public UpdatePaymentsUpdatePaymentsRequest withStatus(openapisdk.models.shared.PaymentsEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdatePaymentsUpdatePaymentsRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}