package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShortCodeCreateShortCodeRequest {
    @SpeakeasyMetadata("form:name=Sid")
    public String sid;
    public CreateShortCodeCreateShortCodeRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
}