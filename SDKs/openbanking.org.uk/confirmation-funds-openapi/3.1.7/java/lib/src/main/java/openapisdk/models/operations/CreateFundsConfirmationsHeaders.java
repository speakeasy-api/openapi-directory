package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundsConfirmationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public CreateFundsConfirmationsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-customer-user-agent")
    public String xCustomerUserAgent;
    public CreateFundsConfirmationsHeaders withXCustomerUserAgent(String xCustomerUserAgent) {
        this.xCustomerUserAgent = xCustomerUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-auth-date")
    public String xFapiAuthDate;
    public CreateFundsConfirmationsHeaders withXFapiAuthDate(String xFapiAuthDate) {
        this.xFapiAuthDate = xFapiAuthDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-customer-ip-address")
    public String xFapiCustomerIpAddress;
    public CreateFundsConfirmationsHeaders withXFapiCustomerIpAddress(String xFapiCustomerIpAddress) {
        this.xFapiCustomerIpAddress = xFapiCustomerIpAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public CreateFundsConfirmationsHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
}