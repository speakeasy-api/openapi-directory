package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalPaymentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public CreateInternationalPaymentsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-customer-user-agent")
    public String xCustomerUserAgent;
    public CreateInternationalPaymentsHeaders withXCustomerUserAgent(String xCustomerUserAgent) {
        this.xCustomerUserAgent = xCustomerUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-auth-date")
    public String xFapiAuthDate;
    public CreateInternationalPaymentsHeaders withXFapiAuthDate(String xFapiAuthDate) {
        this.xFapiAuthDate = xFapiAuthDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-customer-ip-address")
    public String xFapiCustomerIpAddress;
    public CreateInternationalPaymentsHeaders withXFapiCustomerIpAddress(String xFapiCustomerIpAddress) {
        this.xFapiCustomerIpAddress = xFapiCustomerIpAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public CreateInternationalPaymentsHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-idempotency-key")
    public String xIdempotencyKey;
    public CreateInternationalPaymentsHeaders withXIdempotencyKey(String xIdempotencyKey) {
        this.xIdempotencyKey = xIdempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-jws-signature")
    public String xJwsSignature;
    public CreateInternationalPaymentsHeaders withXJwsSignature(String xJwsSignature) {
        this.xJwsSignature = xJwsSignature;
        return this;
    }
}