package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCredentialPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCredentialPublicKeyPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}