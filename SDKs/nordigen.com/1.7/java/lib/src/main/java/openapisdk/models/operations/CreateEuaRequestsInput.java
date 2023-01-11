package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEuaRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EndUserAgreementInput endUserAgreement;
    public CreateEuaRequestsInput withEndUserAgreement(openapisdk.models.shared.EndUserAgreementInput endUserAgreement) {
        this.endUserAgreement = endUserAgreement;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.EndUserAgreementInput endUserAgreement1;
    public CreateEuaRequestsInput withEndUserAgreement1(openapisdk.models.shared.EndUserAgreementInput endUserAgreement1) {
        this.endUserAgreement1 = endUserAgreement1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.EndUserAgreementInput endUserAgreement2;
    public CreateEuaRequestsInput withEndUserAgreement2(openapisdk.models.shared.EndUserAgreementInput endUserAgreement2) {
        this.endUserAgreement2 = endUserAgreement2;
        return this;
    }
}