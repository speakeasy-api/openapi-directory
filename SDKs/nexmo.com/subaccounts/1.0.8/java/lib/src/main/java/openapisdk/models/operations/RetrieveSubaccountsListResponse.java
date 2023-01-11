package openapisdk.models.operations;



public class RetrieveSubaccountsListResponse {
    public String contentType;
    public RetrieveSubaccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveSubaccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subaccountsAllResponse;
    public RetrieveSubaccountsListResponse withSubaccountsAllResponse(Object subaccountsAllResponse) {
        this.subaccountsAllResponse = subaccountsAllResponse;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public RetrieveSubaccountsListResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public RetrieveSubaccountsList401ApplicationJson retrieveSubaccountsList401ApplicationJSONObject;
    public RetrieveSubaccountsListResponse withRetrieveSubaccountsList401ApplicationJsonObject(RetrieveSubaccountsList401ApplicationJson retrieveSubaccountsList401ApplicationJSONObject) {
        this.retrieveSubaccountsList401ApplicationJSONObject = retrieveSubaccountsList401ApplicationJSONObject;
        return this;
    }
    public RetrieveSubaccountsList404ApplicationJson retrieveSubaccountsList404ApplicationJSONObject;
    public RetrieveSubaccountsListResponse withRetrieveSubaccountsList404ApplicationJsonObject(RetrieveSubaccountsList404ApplicationJson retrieveSubaccountsList404ApplicationJSONObject) {
        this.retrieveSubaccountsList404ApplicationJSONObject = retrieveSubaccountsList404ApplicationJSONObject;
        return this;
    }
}