package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShortCodeUpdateShortCodeRequest {
    @SpeakeasyMetadata("form:name=IsReserved")
    public Boolean isReserved;
    public UpdateShortCodeUpdateShortCodeRequest withIsReserved(Boolean isReserved) {
        this.isReserved = isReserved;
        return this;
    }
}