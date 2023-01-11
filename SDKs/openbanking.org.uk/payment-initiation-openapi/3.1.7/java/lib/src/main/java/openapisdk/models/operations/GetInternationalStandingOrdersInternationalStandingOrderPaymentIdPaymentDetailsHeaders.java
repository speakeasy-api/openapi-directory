package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-customer-user-agent")
    public String xCustomerUserAgent;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders withXCustomerUserAgent(String xCustomerUserAgent) {
        this.xCustomerUserAgent = xCustomerUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-auth-date")
    public String xFapiAuthDate;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders withXFapiAuthDate(String xFapiAuthDate) {
        this.xFapiAuthDate = xFapiAuthDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-customer-ip-address")
    public String xFapiCustomerIpAddress;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders withXFapiCustomerIpAddress(String xFapiCustomerIpAddress) {
        this.xFapiCustomerIpAddress = xFapiCustomerIpAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
}