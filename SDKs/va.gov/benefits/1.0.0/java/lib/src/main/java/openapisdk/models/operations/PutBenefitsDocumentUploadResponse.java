package openapisdk.models.operations;



public class PutBenefitsDocumentUploadResponse {
    public byte[] body;
    public PutBenefitsDocumentUploadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutBenefitsDocumentUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutBenefitsDocumentUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutBenefitsDocumentUpload401ApplicationJson putBenefitsDocumentUpload401ApplicationJSONObject;
    public PutBenefitsDocumentUploadResponse withPutBenefitsDocumentUpload401ApplicationJsonObject(PutBenefitsDocumentUpload401ApplicationJson putBenefitsDocumentUpload401ApplicationJSONObject) {
        this.putBenefitsDocumentUpload401ApplicationJSONObject = putBenefitsDocumentUpload401ApplicationJSONObject;
        return this;
    }
    public PutBenefitsDocumentUpload422ApplicationJson putBenefitsDocumentUpload422ApplicationJSONObject;
    public PutBenefitsDocumentUploadResponse withPutBenefitsDocumentUpload422ApplicationJsonObject(PutBenefitsDocumentUpload422ApplicationJson putBenefitsDocumentUpload422ApplicationJSONObject) {
        this.putBenefitsDocumentUpload422ApplicationJSONObject = putBenefitsDocumentUpload422ApplicationJSONObject;
        return this;
    }
    public PutBenefitsDocumentUpload429ApplicationJson putBenefitsDocumentUpload429ApplicationJSONObject;
    public PutBenefitsDocumentUploadResponse withPutBenefitsDocumentUpload429ApplicationJsonObject(PutBenefitsDocumentUpload429ApplicationJson putBenefitsDocumentUpload429ApplicationJSONObject) {
        this.putBenefitsDocumentUpload429ApplicationJSONObject = putBenefitsDocumentUpload429ApplicationJSONObject;
        return this;
    }
    public PutBenefitsDocumentUpload500ApplicationJson putBenefitsDocumentUpload500ApplicationJSONObject;
    public PutBenefitsDocumentUploadResponse withPutBenefitsDocumentUpload500ApplicationJsonObject(PutBenefitsDocumentUpload500ApplicationJson putBenefitsDocumentUpload500ApplicationJSONObject) {
        this.putBenefitsDocumentUpload500ApplicationJSONObject = putBenefitsDocumentUpload500ApplicationJSONObject;
        return this;
    }
}