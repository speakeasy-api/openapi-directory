package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Psd2Request {
    @SpeakeasyMetadata("form:name=amount")
    public Float amount;
    public Psd2Request withAmount(Float amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public Psd2Request withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=api_secret")
    public String apiSecret;
    public Psd2Request withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=code_length")
    public Long codeLength;
    public Psd2Request withCodeLength(Long codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=country")
    public String country;
    public Psd2Request withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=lg")
    public Psd2RequestLgEnum lg;
    public Psd2Request withLg(Psd2RequestLgEnum lg) {
        this.lg = lg;
        return this;
    }
    @SpeakeasyMetadata("form:name=next_event_wait")
    public Long nextEventWait;
    public Psd2Request withNextEventWait(Long nextEventWait) {
        this.nextEventWait = nextEventWait;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public Psd2Request withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=payee")
    public String payee;
    public Psd2Request withPayee(String payee) {
        this.payee = payee;
        return this;
    }
    @SpeakeasyMetadata("form:name=pin_expiry")
    public Long pinExpiry;
    public Psd2Request withPinExpiry(Long pinExpiry) {
        this.pinExpiry = pinExpiry;
        return this;
    }
    @SpeakeasyMetadata("form:name=workflow_id")
    public Long workflowId;
    public Psd2Request withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}