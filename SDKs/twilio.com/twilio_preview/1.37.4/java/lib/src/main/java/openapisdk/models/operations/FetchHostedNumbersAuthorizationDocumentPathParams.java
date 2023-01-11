package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchHostedNumbersAuthorizationDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchHostedNumbersAuthorizationDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}