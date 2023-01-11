package openapisdk.models.operations;



public class ApikeysKeysLookupKeyResponse {
    public String contentType;
    public ApikeysKeysLookupKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApikeysKeysLookupKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V2LookupKeyResponse v2LookupKeyResponse;
    public ApikeysKeysLookupKeyResponse withV2LookupKeyResponse(openapisdk.models.shared.V2LookupKeyResponse v2LookupKeyResponse) {
        this.v2LookupKeyResponse = v2LookupKeyResponse;
        return this;
    }
}