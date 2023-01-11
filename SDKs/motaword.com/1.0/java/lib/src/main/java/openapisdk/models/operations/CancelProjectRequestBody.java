package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelProjectRequestBody {
    @SpeakeasyMetadata("multipartForm:name=reason")
    public String reason;
    public CancelProjectRequestBody withReason(String reason) {
        this.reason = reason;
        return this;
    }
}