package openapisdk.models.operations;



public class GetTenantTenantnameResponse {
    public String contentType;
    public GetTenantTenantnameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTenantTenantnameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTenantTenantname200ApplicationJson getTenantTenantname200ApplicationJSONObject;
    public GetTenantTenantnameResponse withGetTenantTenantname200ApplicationJsonObject(GetTenantTenantname200ApplicationJson getTenantTenantname200ApplicationJSONObject) {
        this.getTenantTenantname200ApplicationJSONObject = getTenantTenantname200ApplicationJSONObject;
        return this;
    }
}