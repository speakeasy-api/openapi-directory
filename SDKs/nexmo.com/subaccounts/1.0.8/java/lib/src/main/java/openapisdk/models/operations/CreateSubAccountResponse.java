package openapisdk.models.operations;



public class CreateSubAccountResponse {
    public String contentType;
    public CreateSubAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSubAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubaccountCreateResponse subaccountCreateResponse;
    public CreateSubAccountResponse withSubaccountCreateResponse(openapisdk.models.shared.SubaccountCreateResponse subaccountCreateResponse) {
        this.subaccountCreateResponse = subaccountCreateResponse;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public CreateSubAccountResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public CreateSubAccount401ApplicationJson createSubAccount401ApplicationJSONObject;
    public CreateSubAccountResponse withCreateSubAccount401ApplicationJsonObject(CreateSubAccount401ApplicationJson createSubAccount401ApplicationJSONObject) {
        this.createSubAccount401ApplicationJSONObject = createSubAccount401ApplicationJSONObject;
        return this;
    }
    public CreateSubAccount404ApplicationJson createSubAccount404ApplicationJSONObject;
    public CreateSubAccountResponse withCreateSubAccount404ApplicationJsonObject(CreateSubAccount404ApplicationJson createSubAccount404ApplicationJSONObject) {
        this.createSubAccount404ApplicationJSONObject = createSubAccount404ApplicationJSONObject;
        return this;
    }
    public CreateSubAccount422ApplicationJson createSubAccount422ApplicationJSONObject;
    public CreateSubAccountResponse withCreateSubAccount422ApplicationJsonObject(CreateSubAccount422ApplicationJson createSubAccount422ApplicationJSONObject) {
        this.createSubAccount422ApplicationJSONObject = createSubAccount422ApplicationJSONObject;
        return this;
    }
}