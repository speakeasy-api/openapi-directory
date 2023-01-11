package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShortCodeCreateShortCodeRequest {
    @SpeakeasyMetadata("form:name=ShortCodeSid")
    public String shortCodeSid;
    public CreateShortCodeCreateShortCodeRequest withShortCodeSid(String shortCodeSid) {
        this.shortCodeSid = shortCodeSid;
        return this;
    }
}