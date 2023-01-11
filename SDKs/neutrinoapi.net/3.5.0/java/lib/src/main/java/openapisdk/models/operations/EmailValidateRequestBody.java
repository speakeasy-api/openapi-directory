package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmailValidateRequestBody {
    @SpeakeasyMetadata("form:name=email")
    public String email;
    public EmailValidateRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=fix-typos")
    public Boolean fixTypos;
    public EmailValidateRequestBody withFixTypos(Boolean fixTypos) {
        this.fixTypos = fixTypos;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public EmailValidateRequestBodyOutputCaseEnum outputCase;
    public EmailValidateRequestBody withOutputCase(EmailValidateRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}