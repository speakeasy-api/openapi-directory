package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmailVerifyRequestBody {
    @SpeakeasyMetadata("form:name=email")
    public String email;
    public EmailVerifyRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=fix-typos")
    public Boolean fixTypos;
    public EmailVerifyRequestBody withFixTypos(Boolean fixTypos) {
        this.fixTypos = fixTypos;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public EmailVerifyRequestBodyOutputCaseEnum outputCase;
    public EmailVerifyRequestBody withOutputCase(EmailVerifyRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}