package openapisdk.models.operations;



public class GetOrganizationSnmpResponse {
    public String contentType;
    public GetOrganizationSnmpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationSnmpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationSnmp200ApplicationJSONObject;
    public GetOrganizationSnmpResponse withGetOrganizationSnmp200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationSnmp200ApplicationJSONObject) {
        this.getOrganizationSnmp200ApplicationJSONObject = getOrganizationSnmp200ApplicationJSONObject;
        return this;
    }
}