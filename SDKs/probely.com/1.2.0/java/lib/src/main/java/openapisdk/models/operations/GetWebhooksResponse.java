package openapisdk.models.operations;



public class GetWebhooksResponse {
    public String contentType;
    public GetWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWebhooks200ApplicationJson getWebhooks200ApplicationJSONObject;
    public GetWebhooksResponse withGetWebhooks200ApplicationJsonObject(GetWebhooks200ApplicationJson getWebhooks200ApplicationJSONObject) {
        this.getWebhooks200ApplicationJSONObject = getWebhooks200ApplicationJSONObject;
        return this;
    }
    public GetWebhooks401ApplicationJson getWebhooks401ApplicationJSONObject;
    public GetWebhooksResponse withGetWebhooks401ApplicationJsonObject(GetWebhooks401ApplicationJson getWebhooks401ApplicationJSONObject) {
        this.getWebhooks401ApplicationJSONObject = getWebhooks401ApplicationJSONObject;
        return this;
    }
    public GetWebhooks403ApplicationJson getWebhooks403ApplicationJSONObject;
    public GetWebhooksResponse withGetWebhooks403ApplicationJsonObject(GetWebhooks403ApplicationJson getWebhooks403ApplicationJSONObject) {
        this.getWebhooks403ApplicationJSONObject = getWebhooks403ApplicationJSONObject;
        return this;
    }
}