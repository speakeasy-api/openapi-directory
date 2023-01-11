package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilePaymentConsentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public CreateFilePaymentConsentsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-customer-user-agent")
    public String xCustomerUserAgent;
    public CreateFilePaymentConsentsHeaders withXCustomerUserAgent(String xCustomerUserAgent) {
        this.xCustomerUserAgent = xCustomerUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-auth-date")
    public String xFapiAuthDate;
    public CreateFilePaymentConsentsHeaders withXFapiAuthDate(String xFapiAuthDate) {
        this.xFapiAuthDate = xFapiAuthDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-customer-ip-address")
    public String xFapiCustomerIpAddress;
    public CreateFilePaymentConsentsHeaders withXFapiCustomerIpAddress(String xFapiCustomerIpAddress) {
        this.xFapiCustomerIpAddress = xFapiCustomerIpAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public CreateFilePaymentConsentsHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-idempotency-key")
    public String xIdempotencyKey;
    public CreateFilePaymentConsentsHeaders withXIdempotencyKey(String xIdempotencyKey) {
        this.xIdempotencyKey = xIdempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-jws-signature")
    public String xJwsSignature;
    public CreateFilePaymentConsentsHeaders withXJwsSignature(String xJwsSignature) {
        this.xJwsSignature = xJwsSignature;
        return this;
    }
}