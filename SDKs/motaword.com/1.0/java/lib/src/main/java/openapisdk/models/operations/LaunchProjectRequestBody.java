package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LaunchProjectRequestBody {
    @SpeakeasyMetadata("multipartForm:name=bin")
    public String bin;
    public LaunchProjectRequestBody withBin(String bin) {
        this.bin = bin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=budget_code")
    public String budgetCode;
    public LaunchProjectRequestBody withBudgetCode(String budgetCode) {
        this.budgetCode = budgetCode;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=card_id")
    public Long cardId;
    public LaunchProjectRequestBody withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payment_code")
    public String paymentCode;
    public LaunchProjectRequestBody withPaymentCode(String paymentCode) {
        this.paymentCode = paymentCode;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payment_method")
    public LaunchProjectRequestBodyPaymentMethodEnum paymentMethod;
    public LaunchProjectRequestBody withPaymentMethod(LaunchProjectRequestBodyPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=stripe_token")
    public String stripeToken;
    public LaunchProjectRequestBody withStripeToken(String stripeToken) {
        this.stripeToken = stripeToken;
        return this;
    }
}