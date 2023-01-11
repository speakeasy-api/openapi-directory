package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCallbackReplaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callbackUrl")
    public String callbackUrl;
    public CertificateCallbackReplaceQueryParams withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
}