package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTollfreeVerificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTollfreeVerificationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}