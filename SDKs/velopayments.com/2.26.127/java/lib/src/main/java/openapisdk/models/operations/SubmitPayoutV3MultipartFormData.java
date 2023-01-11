package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitPayoutV3MultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=file,json")
    public openapisdk.models.shared.PaymentInstructionV3[] file;
    public SubmitPayoutV3MultipartFormData withFile(openapisdk.models.shared.PaymentInstructionV3[] file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payorId")
    public String payorId;
    public SubmitPayoutV3MultipartFormData withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payoutFromPayorId")
    public String payoutFromPayorId;
    public SubmitPayoutV3MultipartFormData withPayoutFromPayorId(String payoutFromPayorId) {
        this.payoutFromPayorId = payoutFromPayorId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payoutToPayorId")
    public String payoutToPayorId;
    public SubmitPayoutV3MultipartFormData withPayoutToPayorId(String payoutToPayorId) {
        this.payoutToPayorId = payoutToPayorId;
        return this;
    }
}