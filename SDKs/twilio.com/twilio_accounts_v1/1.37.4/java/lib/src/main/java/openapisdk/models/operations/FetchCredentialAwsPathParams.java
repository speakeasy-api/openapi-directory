package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCredentialAwsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCredentialAwsPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}