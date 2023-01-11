package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticPaymentConsentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public CreateDomesticPaymentConsentsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-customer-user-agent")
    public String xCustomerUserAgent;
    public CreateDomesticPaymentConsentsHeaders withXCustomerUserAgent(String xCustomerUserAgent) {
        this.xCustomerUserAgent = xCustomerUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-auth-date")
    public String xFapiAuthDate;
    public CreateDomesticPaymentConsentsHeaders withXFapiAuthDate(String xFapiAuthDate) {
        this.xFapiAuthDate = xFapiAuthDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-customer-ip-address")
    public String xFapiCustomerIpAddress;
    public CreateDomesticPaymentConsentsHeaders withXFapiCustomerIpAddress(String xFapiCustomerIpAddress) {
        this.xFapiCustomerIpAddress = xFapiCustomerIpAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public CreateDomesticPaymentConsentsHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-idempotency-key")
    public String xIdempotencyKey;
    public CreateDomesticPaymentConsentsHeaders withXIdempotencyKey(String xIdempotencyKey) {
        this.xIdempotencyKey = xIdempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-jws-signature")
    public String xJwsSignature;
    public CreateDomesticPaymentConsentsHeaders withXJwsSignature(String xJwsSignature) {
        this.xJwsSignature = xJwsSignature;
        return this;
    }
}