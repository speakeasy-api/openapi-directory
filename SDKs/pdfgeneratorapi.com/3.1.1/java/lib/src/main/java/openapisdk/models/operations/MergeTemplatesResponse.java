package openapisdk.models.operations;



public class MergeTemplatesResponse {
    public String contentType;
    public MergeTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MergeTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MergeTemplates200ApplicationJson mergeTemplates200ApplicationJSONObject;
    public MergeTemplatesResponse withMergeTemplates200ApplicationJsonObject(MergeTemplates200ApplicationJson mergeTemplates200ApplicationJSONObject) {
        this.mergeTemplates200ApplicationJSONObject = mergeTemplates200ApplicationJSONObject;
        return this;
    }
    public MergeTemplates401ApplicationJson mergeTemplates401ApplicationJSONObject;
    public MergeTemplatesResponse withMergeTemplates401ApplicationJsonObject(MergeTemplates401ApplicationJson mergeTemplates401ApplicationJSONObject) {
        this.mergeTemplates401ApplicationJSONObject = mergeTemplates401ApplicationJSONObject;
        return this;
    }
    public MergeTemplates403ApplicationJson mergeTemplates403ApplicationJSONObject;
    public MergeTemplatesResponse withMergeTemplates403ApplicationJsonObject(MergeTemplates403ApplicationJson mergeTemplates403ApplicationJSONObject) {
        this.mergeTemplates403ApplicationJSONObject = mergeTemplates403ApplicationJSONObject;
        return this;
    }
    public MergeTemplates404ApplicationJson mergeTemplates404ApplicationJSONObject;
    public MergeTemplatesResponse withMergeTemplates404ApplicationJsonObject(MergeTemplates404ApplicationJson mergeTemplates404ApplicationJSONObject) {
        this.mergeTemplates404ApplicationJSONObject = mergeTemplates404ApplicationJSONObject;
        return this;
    }
    public MergeTemplates422ApplicationJson mergeTemplates422ApplicationJSONObject;
    public MergeTemplatesResponse withMergeTemplates422ApplicationJsonObject(MergeTemplates422ApplicationJson mergeTemplates422ApplicationJSONObject) {
        this.mergeTemplates422ApplicationJSONObject = mergeTemplates422ApplicationJSONObject;
        return this;
    }
    public MergeTemplates500ApplicationJson mergeTemplates500ApplicationJSONObject;
    public MergeTemplatesResponse withMergeTemplates500ApplicationJsonObject(MergeTemplates500ApplicationJson mergeTemplates500ApplicationJSONObject) {
        this.mergeTemplates500ApplicationJSONObject = mergeTemplates500ApplicationJSONObject;
        return this;
    }
}