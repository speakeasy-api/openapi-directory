package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePaymentsCreatePaymentsRequest {
    @SpeakeasyMetadata("form:name=BankAccountType")
    public openapisdk.models.shared.PaymentsEnumBankAccountTypeEnum bankAccountType;
    public CreatePaymentsCreatePaymentsRequest withBankAccountType(openapisdk.models.shared.PaymentsEnumBankAccountTypeEnum bankAccountType) {
        this.bankAccountType = bankAccountType;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChargeAmount")
    public Double chargeAmount;
    public CreatePaymentsCreatePaymentsRequest withChargeAmount(Double chargeAmount) {
        this.chargeAmount = chargeAmount;
        return this;
    }
    @SpeakeasyMetadata("form:name=Currency")
    public String currency;
    public CreatePaymentsCreatePaymentsRequest withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public CreatePaymentsCreatePaymentsRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdempotencyKey")
    public String idempotencyKey;
    public CreatePaymentsCreatePaymentsRequest withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Input")
    public String input;
    public CreatePaymentsCreatePaymentsRequest withInput(String input) {
        this.input = input;
        return this;
    }
    @SpeakeasyMetadata("form:name=MinPostalCodeLength")
    public Long minPostalCodeLength;
    public CreatePaymentsCreatePaymentsRequest withMinPostalCodeLength(Long minPostalCodeLength) {
        this.minPostalCodeLength = minPostalCodeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=Parameter")
    public Object parameter;
    public CreatePaymentsCreatePaymentsRequest withParameter(Object parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("form:name=PaymentConnector")
    public String paymentConnector;
    public CreatePaymentsCreatePaymentsRequest withPaymentConnector(String paymentConnector) {
        this.paymentConnector = paymentConnector;
        return this;
    }
    @SpeakeasyMetadata("form:name=PaymentMethod")
    public openapisdk.models.shared.PaymentsEnumPaymentMethodEnum paymentMethod;
    public CreatePaymentsCreatePaymentsRequest withPaymentMethod(openapisdk.models.shared.PaymentsEnumPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostalCode")
    public Boolean postalCode;
    public CreatePaymentsCreatePaymentsRequest withPostalCode(Boolean postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=SecurityCode")
    public Boolean securityCode;
    public CreatePaymentsCreatePaymentsRequest withSecurityCode(Boolean securityCode) {
        this.securityCode = securityCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreatePaymentsCreatePaymentsRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timeout")
    public Long timeout;
    public CreatePaymentsCreatePaymentsRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=TokenType")
    public openapisdk.models.shared.PaymentsEnumTokenTypeEnum tokenType;
    public CreatePaymentsCreatePaymentsRequest withTokenType(openapisdk.models.shared.PaymentsEnumTokenTypeEnum tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @SpeakeasyMetadata("form:name=ValidCardTypes")
    public String validCardTypes;
    public CreatePaymentsCreatePaymentsRequest withValidCardTypes(String validCardTypes) {
        this.validCardTypes = validCardTypes;
        return this;
    }
}