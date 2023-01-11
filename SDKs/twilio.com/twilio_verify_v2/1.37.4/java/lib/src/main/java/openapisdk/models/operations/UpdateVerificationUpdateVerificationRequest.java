package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVerificationUpdateVerificationRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.VerificationEnumStatusEnum status;
    public UpdateVerificationUpdateVerificationRequest withStatus(openapisdk.models.shared.VerificationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}