package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchVerificationAttemptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchVerificationAttemptPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}