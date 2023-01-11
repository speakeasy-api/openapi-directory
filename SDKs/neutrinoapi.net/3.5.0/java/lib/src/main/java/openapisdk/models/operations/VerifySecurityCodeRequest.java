package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifySecurityCodeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public VerifySecurityCodeRequestBody request;
    public VerifySecurityCodeRequest withRequest(VerifySecurityCodeRequestBody request) {
        this.request = request;
        return this;
    }
}