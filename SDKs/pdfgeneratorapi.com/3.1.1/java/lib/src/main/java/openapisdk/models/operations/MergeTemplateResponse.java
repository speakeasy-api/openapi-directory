package openapisdk.models.operations;



public class MergeTemplateResponse {
    public String contentType;
    public MergeTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MergeTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MergeTemplate200ApplicationJson mergeTemplate200ApplicationJSONObject;
    public MergeTemplateResponse withMergeTemplate200ApplicationJsonObject(MergeTemplate200ApplicationJson mergeTemplate200ApplicationJSONObject) {
        this.mergeTemplate200ApplicationJSONObject = mergeTemplate200ApplicationJSONObject;
        return this;
    }
    public MergeTemplate401ApplicationJson mergeTemplate401ApplicationJSONObject;
    public MergeTemplateResponse withMergeTemplate401ApplicationJsonObject(MergeTemplate401ApplicationJson mergeTemplate401ApplicationJSONObject) {
        this.mergeTemplate401ApplicationJSONObject = mergeTemplate401ApplicationJSONObject;
        return this;
    }
    public MergeTemplate403ApplicationJson mergeTemplate403ApplicationJSONObject;
    public MergeTemplateResponse withMergeTemplate403ApplicationJsonObject(MergeTemplate403ApplicationJson mergeTemplate403ApplicationJSONObject) {
        this.mergeTemplate403ApplicationJSONObject = mergeTemplate403ApplicationJSONObject;
        return this;
    }
    public MergeTemplate404ApplicationJson mergeTemplate404ApplicationJSONObject;
    public MergeTemplateResponse withMergeTemplate404ApplicationJsonObject(MergeTemplate404ApplicationJson mergeTemplate404ApplicationJSONObject) {
        this.mergeTemplate404ApplicationJSONObject = mergeTemplate404ApplicationJSONObject;
        return this;
    }
    public MergeTemplate422ApplicationJson mergeTemplate422ApplicationJSONObject;
    public MergeTemplateResponse withMergeTemplate422ApplicationJsonObject(MergeTemplate422ApplicationJson mergeTemplate422ApplicationJSONObject) {
        this.mergeTemplate422ApplicationJSONObject = mergeTemplate422ApplicationJSONObject;
        return this;
    }
    public MergeTemplate500ApplicationJson mergeTemplate500ApplicationJSONObject;
    public MergeTemplateResponse withMergeTemplate500ApplicationJsonObject(MergeTemplate500ApplicationJson mergeTemplate500ApplicationJSONObject) {
        this.mergeTemplate500ApplicationJSONObject = mergeTemplate500ApplicationJSONObject;
        return this;
    }
}