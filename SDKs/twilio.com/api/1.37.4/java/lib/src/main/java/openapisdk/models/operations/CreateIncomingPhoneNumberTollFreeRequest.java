package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberTollFreeRequest {
    public String serverURL;
    public CreateIncomingPhoneNumberTollFreeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateIncomingPhoneNumberTollFreePathParams pathParams;
    public CreateIncomingPhoneNumberTollFreeRequest withPathParams(CreateIncomingPhoneNumberTollFreePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest request;
    public CreateIncomingPhoneNumberTollFreeRequest withRequest(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest request) {
        this.request = request;
        return this;
    }
    public CreateIncomingPhoneNumberTollFreeSecurity security;
    public CreateIncomingPhoneNumberTollFreeRequest withSecurity(CreateIncomingPhoneNumberTollFreeSecurity security) {
        this.security = security;
        return this;
    }
}