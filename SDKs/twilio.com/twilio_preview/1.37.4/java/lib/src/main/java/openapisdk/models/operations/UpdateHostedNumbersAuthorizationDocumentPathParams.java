package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostedNumbersAuthorizationDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateHostedNumbersAuthorizationDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}