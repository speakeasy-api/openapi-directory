package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHostedNumbersDependentHostedNumberOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SigningDocumentSid")
    public String signingDocumentSid;
    public ListHostedNumbersDependentHostedNumberOrderPathParams withSigningDocumentSid(String signingDocumentSid) {
        this.signingDocumentSid = signingDocumentSid;
        return this;
    }
}