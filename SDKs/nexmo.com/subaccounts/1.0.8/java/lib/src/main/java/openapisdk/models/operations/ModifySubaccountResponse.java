package openapisdk.models.operations;



public class ModifySubaccountResponse {
    public String contentType;
    public ModifySubaccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ModifySubaccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subaccountResponse;
    public ModifySubaccountResponse withSubaccountResponse(Object subaccountResponse) {
        this.subaccountResponse = subaccountResponse;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public ModifySubaccountResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public ModifySubaccount401ApplicationJson modifySubaccount401ApplicationJSONObject;
    public ModifySubaccountResponse withModifySubaccount401ApplicationJsonObject(ModifySubaccount401ApplicationJson modifySubaccount401ApplicationJSONObject) {
        this.modifySubaccount401ApplicationJSONObject = modifySubaccount401ApplicationJSONObject;
        return this;
    }
    public ModifySubaccount404ApplicationJson modifySubaccount404ApplicationJSONObject;
    public ModifySubaccountResponse withModifySubaccount404ApplicationJsonObject(ModifySubaccount404ApplicationJson modifySubaccount404ApplicationJSONObject) {
        this.modifySubaccount404ApplicationJSONObject = modifySubaccount404ApplicationJSONObject;
        return this;
    }
    public ModifySubaccount422ApplicationJson modifySubaccount422ApplicationJSONObject;
    public ModifySubaccountResponse withModifySubaccount422ApplicationJsonObject(ModifySubaccount422ApplicationJson modifySubaccount422ApplicationJSONObject) {
        this.modifySubaccount422ApplicationJSONObject = modifySubaccount422ApplicationJSONObject;
        return this;
    }
}