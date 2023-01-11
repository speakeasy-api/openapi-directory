package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePlayerStreamerUpdatePlayerStreamerRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.PlayerStreamerEnumUpdateStatusEnum status;
    public UpdatePlayerStreamerUpdatePlayerStreamerRequest withStatus(openapisdk.models.shared.PlayerStreamerEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}