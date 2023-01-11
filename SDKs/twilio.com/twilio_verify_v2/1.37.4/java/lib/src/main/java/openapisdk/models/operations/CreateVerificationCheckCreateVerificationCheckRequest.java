package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVerificationCheckCreateVerificationCheckRequest {
    @SpeakeasyMetadata("form:name=Amount")
    public String amount;
    public CreateVerificationCheckCreateVerificationCheckRequest withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("form:name=Code")
    public String code;
    public CreateVerificationCheckCreateVerificationCheckRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("form:name=Payee")
    public String payee;
    public CreateVerificationCheckCreateVerificationCheckRequest withPayee(String payee) {
        this.payee = payee;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateVerificationCheckCreateVerificationCheckRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("form:name=VerificationSid")
    public String verificationSid;
    public CreateVerificationCheckCreateVerificationCheckRequest withVerificationSid(String verificationSid) {
        this.verificationSid = verificationSid;
        return this;
    }
}