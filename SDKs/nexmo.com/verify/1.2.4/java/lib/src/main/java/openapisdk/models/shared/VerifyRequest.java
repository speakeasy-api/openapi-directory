package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyRequest {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public VerifyRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=api_secret")
    public String apiSecret;
    public VerifyRequest withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=brand")
    public String brand;
    public VerifyRequest withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @SpeakeasyMetadata("form:name=code_length")
    public Long codeLength;
    public VerifyRequest withCodeLength(Long codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=country")
    public String country;
    public VerifyRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=lg")
    public VerifyRequestLgEnum lg;
    public VerifyRequest withLg(VerifyRequestLgEnum lg) {
        this.lg = lg;
        return this;
    }
    @SpeakeasyMetadata("form:name=next_event_wait")
    public Long nextEventWait;
    public VerifyRequest withNextEventWait(Long nextEventWait) {
        this.nextEventWait = nextEventWait;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public VerifyRequest withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=pin_code")
    public String pinCode;
    public VerifyRequest withPinCode(String pinCode) {
        this.pinCode = pinCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=pin_expiry")
    public Long pinExpiry;
    public VerifyRequest withPinExpiry(Long pinExpiry) {
        this.pinExpiry = pinExpiry;
        return this;
    }
    @SpeakeasyMetadata("form:name=sender_id")
    public String senderId;
    public VerifyRequest withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @SpeakeasyMetadata("form:name=workflow_id")
    public Long workflowId;
    public VerifyRequest withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}