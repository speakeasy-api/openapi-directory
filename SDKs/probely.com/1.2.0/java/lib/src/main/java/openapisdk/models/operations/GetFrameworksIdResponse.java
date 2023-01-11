package openapisdk.models.operations;



public class GetFrameworksIdResponse {
    public String contentType;
    public GetFrameworksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Framework framework;
    public GetFrameworksIdResponse withFramework(openapisdk.models.shared.Framework framework) {
        this.framework = framework;
        return this;
    }
    public Long statusCode;
    public GetFrameworksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFrameworksId401ApplicationJson getFrameworksId401ApplicationJSONObject;
    public GetFrameworksIdResponse withGetFrameworksId401ApplicationJsonObject(GetFrameworksId401ApplicationJson getFrameworksId401ApplicationJSONObject) {
        this.getFrameworksId401ApplicationJSONObject = getFrameworksId401ApplicationJSONObject;
        return this;
    }
    public GetFrameworksId404ApplicationJson getFrameworksId404ApplicationJSONObject;
    public GetFrameworksIdResponse withGetFrameworksId404ApplicationJsonObject(GetFrameworksId404ApplicationJson getFrameworksId404ApplicationJSONObject) {
        this.getFrameworksId404ApplicationJSONObject = getFrameworksId404ApplicationJSONObject;
        return this;
    }
}