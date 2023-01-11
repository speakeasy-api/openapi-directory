package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiprecUpdateSiprecRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.SiprecEnumUpdateStatusEnum status;
    public UpdateSiprecUpdateSiprecRequest withStatus(openapisdk.models.shared.SiprecEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}