package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifySecurityCodeRequestBody {
    @SpeakeasyMetadata("form:name=limit-by")
    public String limitBy;
    public VerifySecurityCodeRequestBody withLimitBy(String limitBy) {
        this.limitBy = limitBy;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public VerifySecurityCodeRequestBodyOutputCaseEnum outputCase;
    public VerifySecurityCodeRequestBody withOutputCase(VerifySecurityCodeRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=security-code")
    public String securityCode;
    public VerifySecurityCodeRequestBody withSecurityCode(String securityCode) {
        this.securityCode = securityCode;
        return this;
    }
}