package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInternationalStandingOrdersHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public CreateInternationalStandingOrdersHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-customer-user-agent")
    public String xCustomerUserAgent;
    public CreateInternationalStandingOrdersHeaders withXCustomerUserAgent(String xCustomerUserAgent) {
        this.xCustomerUserAgent = xCustomerUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-auth-date")
    public String xFapiAuthDate;
    public CreateInternationalStandingOrdersHeaders withXFapiAuthDate(String xFapiAuthDate) {
        this.xFapiAuthDate = xFapiAuthDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-customer-ip-address")
    public String xFapiCustomerIpAddress;
    public CreateInternationalStandingOrdersHeaders withXFapiCustomerIpAddress(String xFapiCustomerIpAddress) {
        this.xFapiCustomerIpAddress = xFapiCustomerIpAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public CreateInternationalStandingOrdersHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-idempotency-key")
    public String xIdempotencyKey;
    public CreateInternationalStandingOrdersHeaders withXIdempotencyKey(String xIdempotencyKey) {
        this.xIdempotencyKey = xIdempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-jws-signature")
    public String xJwsSignature;
    public CreateInternationalStandingOrdersHeaders withXJwsSignature(String xJwsSignature) {
        this.xJwsSignature = xJwsSignature;
        return this;
    }
}