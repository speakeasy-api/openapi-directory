package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateLicenseeRequestBody {
    @SpeakeasyMetadata("form:name=action")
    public ValidateLicenseeRequestBodyActionEnum action;
    public ValidateLicenseeRequestBody withAction(ValidateLicenseeRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseeName")
    public String licenseeName;
    public ValidateLicenseeRequestBody withLicenseeName(String licenseeName) {
        this.licenseeName = licenseeName;
        return this;
    }
    @SpeakeasyMetadata("form:name=nodeSecret")
    public String nodeSecret;
    public ValidateLicenseeRequestBody withNodeSecret(String nodeSecret) {
        this.nodeSecret = nodeSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=productModuleNumber")
    public String productModuleNumber;
    public ValidateLicenseeRequestBody withProductModuleNumber(String productModuleNumber) {
        this.productModuleNumber = productModuleNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=productNumber")
    public String productNumber;
    public ValidateLicenseeRequestBody withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=sessionId")
    public String sessionId;
    public ValidateLicenseeRequestBody withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}